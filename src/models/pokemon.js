import { Schema } from "mongoose";

const pokemonSchema = new Schema({
  id: { type: String, required: true, unique: true, maxlength: 50 },
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