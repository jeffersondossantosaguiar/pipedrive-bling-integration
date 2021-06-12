import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlingModule } from './bling/bling.module';
import { IntegrationController } from './integration/integration.controller';
import { IntegrationModule } from './integration/integration.module';
import { IntegrationService } from './integration/integration.service';
import { PipedriveModule } from './pipedrive/pipedrive.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PipedriveModule,
    IntegrationModule,
    BlingModule,
  ],
  controllers: [AppController, IntegrationController],
  providers: [AppService, IntegrationService],
})
export class AppModule { }
