import { IEmailPhoneDTO } from './email-phone-dto';

export interface IPersonDTO {
  active_flag: boolean;
  name: string;
  email: IEmailPhoneDTO[];
  phone: IEmailPhoneDTO[];
  owner_id: number;
  value: number;
}
