import { Injectable } from "@nestjs/common";
import { InjectConnection } from "@nestjs/mongoose";
import { Db } from "mongodb";
import { Connection, ConnectionStates } from "mongoose";

@Injectable()
export class MongoDbService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async getDb(): Promise<Db> {
    if (this.connection.readyState !== ConnectionStates.connected) {
      await new Promise((resolve) => this.connection.once("open", resolve));
    }
    const db = this.connection.db;
    if (!db) {
      throw new Error("MongoDB connection is not ready yet");
    }
    return db;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async find(collection: string, query = {}): Promise<any[]> {
    const db = await this.getDb();
    return await db.collection(collection)?.find(query).toArray();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async findOne(collection: string, query = {}): Promise<any> {
    const db = await this.getDb();
    return db.collection(collection).findOne(query);
  }
}
