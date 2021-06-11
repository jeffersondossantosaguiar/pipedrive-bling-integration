import { Controller, Post } from '@nestjs/common';
import { BlingService } from './bling.service';

@Controller('bling')
export class BlingController {
  constructor(private readonly blingService: BlingService) { }

  @Post()
  public async saveOrder(): Promise<any> {
    return this.blingService.saveOrder();
  }
}
