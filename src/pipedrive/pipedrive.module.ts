import { Module } from '@nestjs/common';
import { PipedriveService } from './pipedrive.service';

@Module({
  controllers: [],
  providers: [PipedriveService],
  exports: [PipedriveService],
})
export class PipedriveModule { }
