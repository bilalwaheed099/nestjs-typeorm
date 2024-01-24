import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  // This cron job will run every minute at 30th second
  // @Cron('30 * * * * *')
  // handleCron() {
  //   this.logger.log('Running every 10 seconds');
  //   console.log('hello');
  // }
}
