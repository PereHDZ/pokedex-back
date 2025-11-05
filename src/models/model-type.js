import { model, Schema } from 'mongoose';

const pokemonTypeSchema = new Schema({
    name: { type: String, required: true, unique: true, maxlength: 20 },
}, {
    timestamps: true,
});

const pokemonTypeModel = model('pokemonType', pokemonTypeSchema);
export default pokemonTypeModel;