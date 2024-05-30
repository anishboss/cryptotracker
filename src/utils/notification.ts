import { io } from "../server";
export const sendNotification = (message: string): void => {
  if (io) {
    io.emit("notification", message);
  } else {
    console.log("sokcet.id not initittlied");
  }
};
