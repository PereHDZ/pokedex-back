import { model, Schema } from "mongoose";
import { EVOLUTION_METHODS } from "../utils/constants.js";

const evolutionStageSchema = new  Schema({
  from: { type: Schema.Types.ObjectId, ref: 'pokemon' },
  to: { type: Schema.Types.ObjectId, ref: 'pokemon' },
  method: { type: String, enum: EVOLUTION_METHODS, required: true },
  level: { type: Number },
  item: { type: String },
  conditions: { type: String },
});

const evolutionLineSchema = new Schema({
  name: { type: String },
  stages: { type: [evolutionStageSchema], required: true },
})

const evolutionLineModel = model('evolutionLine', evolutionLineSchema);
export default evolutionLineModel;