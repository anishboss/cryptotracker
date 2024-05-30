import winston from "winston";

export const priceLogger = winston.createLogger({
  level: "info",
  //   format: winston.format.json(),
  // Use timestamp and printf to create a standard log format
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(
      (info) => `${info.timestamp} ${info.level}: ${info.message}`
    )
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/price.log" }),
  ],
});
