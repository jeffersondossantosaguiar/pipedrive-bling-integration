import { IClientDTO } from './client-dto';

export interface IOrderDTO {
  cliente: IClientDTO;
  itens: string;
  primary: boolean;
}
