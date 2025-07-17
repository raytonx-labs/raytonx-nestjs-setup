import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { DemoJob } from "./jobs/demo.job";
import { SchedulerService } from "./scheduler.service";

@Module({
  providers: [SchedulerService, DemoJob],
  imports: [ScheduleModule.forRoot()],
})
export class SchedulerModule {}
