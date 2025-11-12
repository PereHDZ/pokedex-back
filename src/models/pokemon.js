import { model, Schema } from "mongoose";
import { EVOLUTION_METHODS } from "../utils/constants.js";

const pokemonSchema = new Schema({
  id: { type: String, required: true, unique: true, maxlength: 50 },
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
  evolutions: {
    type: [{ 
      toId: { type: Schema.Types.ObjectId, ref: 'pokemon'},
      method: { type: String, enum: EVOLUTION_METHODS, required: true },
      level: { type: Number },
      item: { type: String },
      conditions: { type: String },
    }]
  }, 
}, {
  timestamps: true,
});

const pokemonModel = model('pokemon', pokemonSchema);
export default pokemonModel;