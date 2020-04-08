import Path from 'path';
import Fs from 'fs';
import { Module, OnModuleDestroy, Logger } from '@nestjs/common';
import * as winston from 'winston';
import { utilities, WinstonModule } from 'nest-winston';

const logFilePath = Path.join(process.cwd(), 'storage', 'log');
const logFileName = 'server.log';

@Module({
  imports: [
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(winston.format.timestamp(), utilities.format.nestLike()),
        }),
        new winston.transports.File({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.uncolorize(),
            winston.format.simple(),
          ),
          dirname: logFilePath,
          filename: logFileName,
          maxsize: 104857600, // 100MB
        }),
      ],
    }),
  ],
})
export class LoggerModule implements OnModuleDestroy {
  private readonly logger: Logger = new Logger(LoggerModule.name);
  onModuleDestroy() {
    const newLogFileName = `server.${Date.now()}.log`;
    this.logger.verbose(`Store the current log file to ${newLogFileName}.`);
    Fs.renameSync(Path.join(logFilePath, logFileName), Path.join(logFilePath, newLogFileName));
  }
}
