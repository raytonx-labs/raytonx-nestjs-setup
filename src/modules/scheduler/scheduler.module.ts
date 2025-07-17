import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { DbModule } from "../db/db.module";
import { MongoDbService } from "../db/mongodb/mongodb.service";
import { DemoJob } from "./jobs/demo.job";
import { SchedulerService } from "./scheduler.service";

@Module({
  imports: [ScheduleModule.forRoot(), DbModule],
  providers: [SchedulerService, DemoJob, MongoDbService],
})
export class SchedulerModule {}
