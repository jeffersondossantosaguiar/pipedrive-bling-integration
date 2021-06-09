import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class PipedriveService {
  public async getDeals() {
    const result: AxiosResponse = await axios.get(
      `${process.env.PIPEDRIVE_BASE_URL}/deals?api_token=${process.env.PIPEDRIVE_KEY}`,
    );

    console.log(result.data);
  }
}
