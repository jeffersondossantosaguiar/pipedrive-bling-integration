import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import * as js2xmlparser from 'js2xmlparser';

@Injectable()
export class BlingService {
  public async saveOrder(): Promise<any> {
    const order = {
      cliente: {
        nome: 'Joselito',
      },
    };

    const xml = js2xmlparser.parse('pedido', order);

    console.log(xml);

    /*     const orderData = await axios.post(
      `${process.env.BLING_BASE_URL}/pedido/json/?apikey=${process.env.BLING_API_KEY}&xml=${xml}`,
    );
 */
    require('axios-debug-log');
    const result: AxiosResponse = await axios.post(
      `${process.env.BLING_BASE_URL}/pedido/json/?apiKey=${process.env.BLING_API_KEY}&xml=${xml}`,
    );

    console.log(result);
  }
}
