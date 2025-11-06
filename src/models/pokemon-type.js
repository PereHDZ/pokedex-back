import { model, Schema, Types } from 'mongoose';

const pokemonTypeSchema = new Schema({
  name: { type: String, required: true, unique: true, maxlength: 20 },
  weaknesses: [{ type: Types.ObjectId, ref: 'pokemonType' }],
  resistances: [{ type: Types.ObjectId, ref: 'pokemonType' }],
  immunities: [{ type: Types.ObjectId, ref: 'pokemonType' }],
}, {
  timestamps: true,
});

const pokemonTypeModel = model('pokemonType', pokemonTypeSchema);
export default pokemonTypeModel;
