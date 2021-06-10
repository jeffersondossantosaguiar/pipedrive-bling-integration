import { Controller, Get } from '@nestjs/common';
import { PipedriveService } from './pipedrive.service';

@Controller('pipedrive')
export class PipedriveController {
  constructor(private readonly service: PipedriveService) { }

  @Get('deals')
  public async getDeals(): Promise<any> {
    return await this.service.getDeals();
  }
}
