import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ContextIdFactory } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { CronModule } from './cron/cron.module';
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { HttpClientModule } from './http-client/http-client.module';
import { TagsModule } from './tags/tags.module';
import { PaymentsModule } from './payments/payments.module';
import { DataSourceModule } from './data-source/data-source.module';
import { UsersModule } from './users/users.module';
import { AggregateByTenantContextIdStrategy } from './core/aggregate-by-tenant.strategy';

ContextIdFactory.apply(new AggregateByTenantContextIdStrategy());

@Module({
  imports: [
    CoffeesModule,
    SchedulerModule,
    CronModule,
    FibonacciModule,
    HttpClientModule.register({ baseUrl: 'http://nestjs.com' }),
    TagsModule,
    PaymentsModule, // 👈
    EventEmitterModule.forRoot(),
    DataSourceModule,
    UsersModule, // 👈 add EventEmitterModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
