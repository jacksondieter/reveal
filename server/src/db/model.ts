import { model, Schema, Model, Document } from 'mongoose';

export interface ISecret extends Document {
  code: string;
  text: string;
  times: number;
}

const SecretSchema: Schema = new Schema({
  code: { type: String, required: true },
  text: { type: String, required: true },
  times: { type: Number, required: true }
});

SecretSchema.index({code:1},{unique:true})

export const Secret: Model<ISecret> = model('Secret', SecretSchema);