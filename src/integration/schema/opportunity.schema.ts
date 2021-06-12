import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OpportunityDocument = Opportunity & Document;

@Schema()
export class Opportunity {
  @Prop()
  date: string;

  @Prop()
  totalValor: number;
}

export const OpportunitySchema = SchemaFactory.createForClass(Opportunity);
