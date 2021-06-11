import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { IDealDTO } from './dtos/deal-dto';

@Injectable()
export class PipedriveService {
  public async getWonDeals(): Promise<IDealDTO[]> {
    const result: AxiosResponse = await axios.get(
      `${process.env.PIPEDRIVE_BASE_URL}/deals`,
      {
        params: {
          api_token: process.env.PIPEDRIVE_API_KEY,
          status: 'won',
        },
      },
    );

    const deals: IDealDTO[] = result.data.data;

    return deals;
  }
}
