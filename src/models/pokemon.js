import { model, Schema } from "mongoose";
import { EVOLUTION_METHODS } from "../utils/constants.js";

const pokemonSchema = new Schema({
  identification: { type: String, required: true, unique: true, maxlength: 50 },
  dexNum: { type: String, required: true },
  name: {
    en: { type: String, trim: true, maxlength: 50 },
    es: { type: String, trim: true, maxlength: 50 },
  },
  typing: {
    type: [{ type: Schema.Types.ObjectId, ref: 'pokemonType' }]
  },
  gen: { type: String, required: true },
  baseForm: { type: Boolean },
  evolutionLineId: { type: Schema.Types.ObjectId, ref: 'evolutionLine' }, 
}, {
  timestamps: true,
});

const pokemonModel = model('pokemon', pokemonSchema);
export default pokemonModel;