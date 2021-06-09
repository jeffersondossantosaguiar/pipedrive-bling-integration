import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlingController } from './bling/bling.controller';
import { PipedriveController } from './pipedrive/pipedrive.controller';
import { PipedriveService } from './pipedrive/pipedrive.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, PipedriveController, BlingController],
  providers: [AppService, PipedriveService],
})
export class AppModule { }
