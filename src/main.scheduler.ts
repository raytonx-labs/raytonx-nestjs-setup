import { NestFactory } from "@nestjs/core";
import { SchedulerModule } from "./modules/scheduler/scheduler.module";

async function bootstrap() {
  const app = await NestFactory.create(SchedulerModule);
  await app.init();
  await app.listen(0);
  console.log("Scheduler Server is running...");
}
void bootstrap();
