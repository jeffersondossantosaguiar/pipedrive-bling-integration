import { Controller, Get } from '@nestjs/common';
import { IDealDTO } from './dtos/deal-dto';
import { PipedriveService } from './pipedrive.service';

@Controller('pipedrive')
export class PipedriveController {
  constructor(private readonly service: PipedriveService) { }

  @Get('won-deals')
  public async getDeals(): Promise<IDealDTO[]> {
    return await this.service.getWonDeals();
  }
}
