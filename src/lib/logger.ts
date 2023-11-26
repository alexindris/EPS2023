import winston from 'winston';
// Define log format
const logFormat = winston.format.printf(
  ({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`,
);
/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    logFormat,
  ),
  transports: [],
});
logger.add(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.splat(),
      winston.format.colorize(),
    ),
  }),
);
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
      format: winston.format.combine(
        winston.format.splat(),
        winston.format.colorize(),
      ),
    }),
  );
  logger.add(
    new winston.transports.File({
      filename: 'logs/debug.log',
      level: 'debug',
      format: winston.format.combine(
        winston.format.splat(),
        winston.format.colorize(),
      ),
      maxFiles: 5,
      maxsize: 5242880, // 5MB
      zippedArchive: true,
    }),
  );
}

const stream = {
  write: (message: string) => {
    logger.info(message.substring(0, message.lastIndexOf('\n')));
  },
};
export { logger, stream };
