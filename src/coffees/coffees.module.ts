import { Module } from '@nestjs/common';

import { COFFEES_DATA_SOURCE, CoffeesService } from './coffees.service';
import { CoffeesController } from './coffees.controller';

@Module({
  controllers: [CoffeesController],
  providers: [
    {
      provide: COFFEES_DATA_SOURCE, // 👈
      useValue: [],
    },
    CoffeesService,
  ],
})
export class CoffeesModule {}
