import { IOrderXmlDTO } from '../bling/dtos/order-xml-dto';
import { IDealDTO } from '../pipedrive/dtos/deal-dto';

export default function orderFormatter(deal: IDealDTO): IOrderXmlDTO {
  const order: IOrderXmlDTO = {
    pedido: [
      {
        name: 'cliente',
        children: [
          {
            name: 'nome',
            text: deal.org_id.name
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, ''),
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
              {
                name: 'descricao',
                text: deal.title
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, ''),
              },
              { name: 'qtde', text: 1 },
              { name: 'vlr_unit', text: deal.value ? deal.value : '0' },
            ],
          },
        ],
      },
    ],
  };

  return order;
}
