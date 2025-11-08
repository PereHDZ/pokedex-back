import { model, Schema } from "mongoose";

const pokemonSchema = new Schema({
  id: { type: String, required: true, unique: true, maxlength: 50 },
  dexNum: { type: Number, required: true },
  name: {
    en: { type: String, trim: true, maxlength: 50 },
    es: { type: String, trim: true, maxlength: 50 },
  },
  typing: {
    type: [{ type: Schema.Types.ObjectId, ref: 'pokemonType' }]
  },
}, {
  timestamps: true,
});

const pokemonModel = model('pokemon', pokemonSchema);
export default pokemonModel;