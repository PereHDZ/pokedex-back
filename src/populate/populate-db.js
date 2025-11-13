import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { populatePokemonTypes } from './pokemon-types.js';
import { getPokemonTypeMap } from './helpers/get-pokemon-type-map.js';
import { populatePokemon } from './pokemon/index.js';
import { populateEvos } from './evolution-lines/index.js';

dotenv.config();

const MONGO_URI = process.env.MONGODB_URL;

const populateDB = async () => {
	try {
		await mongoose.connect(MONGO_URI);
		console.log('✅ Connected to MongoDB');

		await mongoose.connection.dropDatabase();
		console.log('🗑  Previous database dropped')

		await populatePokemonTypes();
		const typeMap = await getPokemonTypeMap();
		await populatePokemon(typeMap);
		await populateEvos();

		console.log('🌱 Database population complete!')
	} catch (err) {
		console.error('❌ Error populating database:', err)
	} finally {
		await mongoose.disconnect();
		console.log('🔌 Disconnected from MongoDB');
	}
};

populateDB();
