import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { IDealDTO } from './dtos/deal-dto';

@Injectable()
export class PipedriveService {
  public async getDeals() {
    const result: AxiosResponse = await axios.get(
      `${process.env.PIPEDRIVE_BASE_URL}/deals?api_token=${process.env.PIPEDRIVE_KEY}`,
    );

    const deals: IDealDTO[] = result.data.data;

    deals.forEach((deal) => {
      console.log(deal.org_id);
    });
  }
}
