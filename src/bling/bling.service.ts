import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { IOrderXmlDTO } from './dtos/order-xml-dto';

const jsontoxml = require('jsontoxml');

@Injectable()
export class BlingService {
  public async saveOrder(order: IOrderXmlDTO): Promise<any> {
    const xml = jsontoxml(order, false);

    const result = await axios.post(
      `${process.env.BLING_BASE_URL}/pedido/json/?apikey=${process.env.BLING_API_KEY}&xml=${xml}`,
    );

    return result.data;
  }
}
