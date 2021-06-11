import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
const xml2js = require('xml2js');

const jsontoxml = require('jsontoxml');

@Injectable()
export class BlingService {
  public async saveOrder(): Promise<any> {
    const xml = jsontoxml(
      {
        pedido: [
          {
            name: 'cliente',
            children: [
              {
                name: 'nome',
                text: 'Company',
              },
              { name: 'tipoPessoa', text: 'J' },
              { name: 'endereco', text: 'Av. Paulista' },
              { name: 'ie_rg', text: '3067663210' },
              { name: 'numero', text: '1200' },
              { name: 'bairro', text: 'Bela Vista' },
              { name: 'cep', text: '01310-100' },
              { name: 'cidade', text: 'Sao Paulo' },
              { name: 'uf', text: 'SP' },
              { name: 'fone', text: '5481153381' },
              {
                name: 'email',
                text: 'company@gmail.com',
              },
            ],
          },
          {
            name: 'transporte',
            children: [
              { name: 'transportadora', text: 'Transportadora XYZ' },
              { name: 'tipo_frete', text: 'R' },
              { name: 'servico_correios', text: 'SEDEX - CONTRATO' },
              {
                name: 'dados_etiqueta',
                children: [
                  { name: 'nome', text: 'Endereco de entrega' },
                  { name: 'endereco', text: 'Rua Visconde de Sao Gabriel' },
                  { name: 'numero', text: '392' },
                  { name: 'complemento', text: 'Sala 59' },
                  { name: 'municipio', text: 'Bento Goncalves' },
                  { name: 'uf', text: 'RS' },
                  { name: 'cep', text: '95.700-000' },
                  { name: 'cidade', text: 'Cidade Alta' },
                ],
              },
              {
                name: 'volumes',
                children: [
                  {
                    name: 'volume',
                    children: [
                      {
                        name: 'servico',
                        text: 'SEDEX - CONTRATO',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'itens',
            children: [
              {
                name: 'item',
                children: [
                  { name: 'codigo', text: 1 },
                  { name: 'descricao', text: 'Won deal' },
                  { name: 'un', text: 'Un' },
                  { name: 'qtde', text: 1 },
                  { name: 'vlr_unit', text: 0 },
                ],
              },
            ],
          },
          {
            name: 'parcelas',
            children: [
              {
                name: 'parcela',
                children: [
                  {
                    name: 'vlr',
                    text: 0,
                  },
                ],
              },
            ],
          },
        ],
      },
      false,
    );

    /*     const order = {
      cliente: {
        nome: 'Joselito',
      },
      itens: [
        {
          item: {
            codigo: 1,
            descricao: 'Caneta 001',
            un: 'Pç',
            vlr_unit: 1.68,
          },
        },
      ],
    }; 
    
    const builder = new xml2js.Builder({
      rootName: 'pedido',
      xmldec: {
        encoding: 'UTF-8',
      },
    });
    const xml = builder.buildObject(order); */

    console.log(xml);

    const result: AxiosResponse = await axios.post(
      `${process.env.BLING_BASE_URL}/pedido/json/?apikey=${process.env.BLING_API_KEY}&xml=${xml}`,
    );

    result.data.retorno.erros.forEach((element) => {
      console.log(element);
    });
  }
}
