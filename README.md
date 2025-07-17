# RaytonX NestJS Setup

## 1. Initial Setup

1. [Prettier + ESLint](https://github.com/raytonx-labs/raytonx-config?tab=readme-ov-file#1-prettier--eslint)
2. [husky & lint-staged](https://github.com/raytonx-labs/raytonx-config?tab=readme-ov-file#2-husky--lint-staged)

## 2. Scheduler Module

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
