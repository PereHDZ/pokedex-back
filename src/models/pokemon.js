import { model, Schema } from "mongoose";

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
}, {
  timestamps: true,
});

const pokemonModel = model('pokemon', pokemonSchema);
export default pokemonModel;