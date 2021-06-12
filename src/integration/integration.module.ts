import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlingModule } from '../bling/bling.module';
import { PipedriveModule } from '../pipedrive/pipedrive.module';
import { IntegrationController } from './integration.controller';
import { IntegrationService } from './integration.service';
import { Opportunity, OpportunitySchema } from './schema/opportunity.schema';

@Module({
  imports: [
    PipedriveModule,
    MongooseModule.forFeature([
      {
        name: Opportunity.name,
        schema: OpportunitySchema,
        collection: 'opportunities',
      },
    ]),
    forwardRef(() => BlingModule),
  ],
  controllers: [IntegrationController],
  providers: [IntegrationService],
  exports: [IntegrationService],
})
export class IntegrationModule { }
