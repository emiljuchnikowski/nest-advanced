import { Controller, Get, Query } from '@nestjs/common';

import { FibonacciWorkerHost } from './fibonacci-worker.host';

@Controller('fibonacci')
export class FibonacciController {
  constructor(private readonly host: FibonacciWorkerHost) {}

  @Get()
  getFibonacci(@Query('n') n = 10) {
    return this.host.run(n);
  }
}
