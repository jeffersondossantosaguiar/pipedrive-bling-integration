import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { BlingService } from 'src/bling/bling.service';
import { PipedriveService } from 'src/pipedrive/pipedrive.service';
import orderFormatter from 'src/utils/orderFormatter';

@Injectable()
export class IntegrationService {
  constructor(
    @Inject(forwardRef(() => PipedriveService))
    private readonly pipedriveService: PipedriveService,
    @Inject(forwardRef(() => BlingService))
    private readonly blingService: BlingService,
  ) { }

  public async integration(): Promise<any> {
    const wonDeals = await this.pipedriveService.getWonDeals();

    wonDeals.forEach(async (deal) => {
      const order = orderFormatter(deal);
      await this.blingService.saveOrder(order);
    });
  }
}
