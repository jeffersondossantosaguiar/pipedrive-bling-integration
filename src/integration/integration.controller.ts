import { Controller, Get } from '@nestjs/common';
import { IntegrationService } from './integration.service';

@Controller('integration')
export class IntegrationController {
  constructor(private readonly integrationService: IntegrationService) { }

  @Get()
  public async integration(): Promise<any> {
    return await this.integrationService.integration();
  }
}
