import { Module } from '@nestjs/common';
import { PipedriveModule } from 'src/pipedrive/pipedrive.module';

@Module({
  imports: [PipedriveModule],
})
export class IntegrationModule { }
