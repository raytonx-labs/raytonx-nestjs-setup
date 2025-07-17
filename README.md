# RaytonX NestJS Setup

## 1. Initial Setup

1. [Prettier + ESLint](https://github.com/raytonx-labs/raytonx-config?tab=readme-ov-file#1-prettier--eslint)
2. [husky & lint-staged](https://github.com/raytonx-labs/raytonx-config?tab=readme-ov-file#2-husky--lint-staged)

## 2. Database Module

1. `MongoDbService` - A service for interacting with MongoDB.

### Usage

```ts
import { MongoDbService } from "@/modules/db/mongodb/mongodb.service";
import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class XXService {
  private readonly logger = new Logger(XXService.name);

  constructor(private readonly db: MongoDbService) {}

  async handle() {
    const raw = await this.db.find("projects");

    this.logger.log(`Fetched ${raw.length} documents from raw MongoDB.`);
  }
}
```

## 3. Scheduler Module

The Scheduler Module is responsible for scheduling tasks at specific times. It uses the `@nestjs/schedule` package to achieve this.

### 1. RUN

```shell
# default load environment variables from .env.development
pnpm start:scheduler:dev

# .env.production
pnpm start:scheduler:prod
```

### 2. Job

1. Entry file: `src/main.scheduler.ts`
2. Use Redis distributed lock for making sure only one instance of the job runs at a time.
3. Job folder: `src/modules/scheduler/jobs`, you can inject the job into the scheduler service.
