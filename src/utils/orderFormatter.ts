import { IOrderXmlDTO } from 'src/bling/dtos/order-xml-dto';
import { IDealDTO } from 'src/pipedrive/dtos/deal-dto';

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

/* {
  id: 19,
  creator_user_id: {
    id: 12365320,
    name: 'jefferson dos santos aguiar',
    email: 'jeffersonsantos.a@gmail.com',
    has_pic: 0,
    pic_hash: null,
    active_flag: true,
    value: 12365320
  },
  user_id: {
    id: 12365320,
    name: 'jefferson dos santos aguiar',
    email: 'jeffersonsantos.a@gmail.com',
    has_pic: 0,
    pic_hash: null,
    active_flag: true,
    value: 12365320
  },
  person_id: {
    active_flag: true,
    name: 'Getulio Souza',
    email: [Array],
    phone: [Array],
    owner_id: 12365320,
    value: 21
  },
  org_id: {
    name: 'Segurança 24h',
    people_count: 1,
    owner_id: 12365320,
    address: 'Avenida Presidente Vargas, 771, Centro, Rio de Janeiro, Brasil',
    active_flag: true,
    cc_email: 'heroprint@pipedrivemail.com',
    value: 20
  },
  stage_id: 1,
  title: 'Segurança 24h negócio',
  value: 33000,
  currency: 'BRL',
  add_time: '2021-06-09 20:25:37',
  update_time: '2021-06-09 20:25:39',
  stage_change_time: null,
  active: false,
  deleted: false,
  status: 'won',
  probability: null,
  next_activity_date: '2019-03-22',
  next_activity_time: null,
  next_activity_id: 19,
  last_activity_id: null,
  last_activity_date: null,
  lost_reason: null,
  visible_to: '3',
  close_time: '2019-03-22 00:00:00',
  pipeline_id: 1,
  won_time: '2019-03-22 00:00:00',
  first_won_time: '2019-03-22 00:00:00',
  lost_time: null,
  products_count: 0,
  files_count: 0,
  notes_count: 1,
  followers_count: 1,
  email_messages_count: 0,
  activities_count: 1,
  done_activities_count: 0,
  undone_activities_count: 1,
  participants_count: 1,
  expected_close_date: '2019-03-22',
  last_incoming_mail_time: null,
  last_outgoing_mail_time: null,
  label: null,
  renewal_type: 'one_time',
  stage_order_nr: 0,
  person_name: 'Getulio Souza',
  org_name: 'Segurança 24h',
  next_activity_subject: 'Chamada subseqüente',
  next_activity_type: 'call',
  next_activity_duration: null,
  next_activity_note: 'Technology, Finance, Automotive',
  group_id: null,
  group_name: null,
  formatted_value: 'R$ 33.000',
  weighted_value: 33000,
  formatted_weighted_value: 'R$ 33.000',
  weighted_value_currency: 'BRL',
  rotten_time: null,
  owner_name: 'jefferson dos santos aguiar',
  cc_email: 'heroprint+deal19@pipedrivemail.com',
  org_hidden: false,
  person_hidden: false
}
 */
