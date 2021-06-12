import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as moment from 'moment';
import { Model } from 'mongoose';
import { BlingService } from '../bling/bling.service';
import { PipedriveService } from '../pipedrive/pipedrive.service';
import orderFormatter from '../utils/orderFormatter';
import { Opportunity, OpportunityDocument } from './schema/opportunity.schema';

@Injectable()
export class IntegrationService {
  constructor(
    @InjectModel(Opportunity.name)
    private opportunityModel: Model<OpportunityDocument>,
    @Inject(forwardRef(() => PipedriveService))
    private readonly pipedriveService: PipedriveService,
    @Inject(forwardRef(() => BlingService))
    private readonly blingService: BlingService,
  ) { }

  public async integration(): Promise<OpportunityDocument> {
    const wonDeals = await this.pipedriveService.getWonDeals();

    const date = moment().format('YYYY-MM-DD');

    let opportunity = await this.opportunityModel.findOne({ date: date });

    if (!opportunity && wonDeals.length > 0) {
      opportunity = await this.opportunityModel.create({
        date: date,
        totalValor: 0,
      });
    }

    for (const deal of wonDeals) {
      const order = orderFormatter(deal);
      const savedOrder = await this.blingService.saveOrder(order);

      if (savedOrder.retorno.pedidos) {
        opportunity.totalValor += deal.value;
      }

      await opportunity.save();
    }

    return await this.opportunityModel.findOne({ _id: opportunity.id });
  }
}
