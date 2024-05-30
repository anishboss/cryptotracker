import http from "http";
import { Server } from "socket.io";
import app from "./app";
import connectDB from "./config/connectDB";
import { runCronJob } from "./utils/cornJobs";
import { watchListPriceChecker } from "./utils/watchlistPriceChecker";

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.set("io", io);
// Handle socket connections
io.on("connection", (socket) => {
  console.log(`${socket.id} user connected`);
  watchListPriceChecker();
  socket.on("disconnect", () => {
    console.log(`${socket.id} user disconnected`);
  });
});

//   Start the server
server.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
  connectDB();
  runCronJob();
});
