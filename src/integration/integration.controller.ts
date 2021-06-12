import { Controller, Get } from '@nestjs/common';
import { IntegrationService } from './integration.service';
import { OpportunityDocument } from './schema/opportunity.schema';

@Controller('integration')
export class IntegrationController {
  constructor(private readonly integrationService: IntegrationService) { }

  @Get()
  public async integration(): Promise<OpportunityDocument> {
    return await this.integrationService.integration();
  }
}
