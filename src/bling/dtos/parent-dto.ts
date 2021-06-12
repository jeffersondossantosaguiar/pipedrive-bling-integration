import { IChildrenDTO } from './children-dto';

export interface IParentXmlDTO {
  name: string;
  children: IChildrenDTO[];
}
