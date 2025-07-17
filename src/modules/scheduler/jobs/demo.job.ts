import { Injectable, Logger } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";

@Injectable()
export class DemoJob {
  private readonly logger = new Logger(DemoJob.name);

  @Cron(CronExpression.EVERY_10_SECONDS)
  handle() {
    this.logger.log("demo job is running... every 10 seconds");
  }
}
