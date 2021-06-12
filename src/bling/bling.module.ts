import { Module } from '@nestjs/common';
import { BlingService } from './bling.service';

@Module({
  controllers: [],
  providers: [BlingService],
  exports: [BlingService],
})
export class BlingModule { }
