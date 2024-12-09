import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PasswordEntryDocument = PasswordEntry & Document;

@Schema()
export class PasswordEntry {
  @Prop({ required: true })
  labelHash: string;

  @Prop({ required: true })
  encryptedUsername: string;

  @Prop({ required: true })
  encryptedPassword: string;
}

export const PasswordEntrySchema = SchemaFactory.createForClass(PasswordEntry);
