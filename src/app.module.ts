import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { BlingModule } from './bling/bling.module';
import { IntegrationModule } from './integration/integration.module';
import { PipedriveModule } from './pipedrive/pipedrive.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PipedriveModule,
    IntegrationModule,
    BlingModule,
    MongooseModule.forRoot(process.env.MONGO_DB_KEY),
  ],
  providers: [AppService, IntegrationModule],
})
export class AppModule { }
