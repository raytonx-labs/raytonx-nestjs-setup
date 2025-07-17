import { Global, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MongoDbService } from "./mongodb/mongodb.service";

@Global()
@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI!), MongooseModule.forFeature([])],
  providers: [MongoDbService],
  exports: [MongoDbService],
})
export class DbModule {}
