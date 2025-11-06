import { pokemonTypeActions } from '../actions/index.js';

export const populatePokemonTypes = async () => {
	const types = [
		'rock', 'water', 'electric', 'grass', 'poison',
		'psychic', 'fire', 'ground', 'flying', 'bug',
		'normal', 'ghost', 'fighting', 'ice', 'dragon',
		'steel', 'dark', 'fairy',
	];

	for (const name of types) {
		try {
			await pokemonTypeActions.create({ name });
		} catch (err) {
			console.error(err);
			throw err;
		};
	}
	console.warn(`${types.length} POKEMON TYPES CREATED`);

	const hola = 'hola';

	try {
		const pokemonTypes = await pokemonTypeActions.findAll();

		const typeMap = {};
		for (const type of pokemonTypes) {
			typeMap[type.name] = type;
		}

		const updates = [
			{
				name: 'rock',
				weaknesses: ['water', 'grass', 'ground', 'fighting', 'steel'],
				resistances: ['poison', 'fire', 'flying', 'normal'],
			},
			{
				name: 'water',
				weaknesses: ['electric', 'grass'],
				resistances: ['water', 'fire', 'ice', 'steel'],
			},
			{
				name: 'electric',
				weaknesses: ['ground'],
				resistances: ['electric', 'flying', 'steel'],
			},
			{
				name: 'grass',
				weaknesses: ['poison', 'fire', 'flying', 'bug', 'ice'],
				resistances: ['water', 'electric', 'grass', 'ground'],
			},
			{
				name: 'poison',
				weaknesses: ['psychic', 'ground'],
				resistances: ['grass', 'poison', 'bug', 'fighting', 'fairy'],
			},
			{
				name: 'psychic',
				weaknesses: ['bug', 'ghost', 'dark'],
				resistances: ['psychic', 'fighting'],
			},
			{
				name: 'fire',
				weaknesses: ['rock', 'water', 'ground'],
				resistances: ['grass', 'fire', 'bug', 'ice', 'steel', 'fairy'],
			},
			{
				name: 'ground',
				weaknesses: ['water', 'grass', 'ice'],
				resistances: ['rock', 'poison'],
				immunities: ['electric'],
			},
			{
				name: 'flying',
				weaknesses: ['rock', 'electric', 'ice'],
				resistances: ['grass', 'bug', 'fighting'],
				immunities: ['ground'],
			},
			{
				name: 'bug',
				weaknesses: ['rock', 'fire', 'flying'],
				resistances: ['grass', 'ground', 'fighting'],
			},
			{
				name: 'normal',
				weaknesses: ['fighting'],
				immunities: ['ghost']
			},
			{
				name: 'ghost',
				weaknesses: ['ghost', 'dark'],
				resistances: ['poison', 'bug'],
				immunities: ['normal', 'fighting'],
			},
			{
				name: 'fighting',
				weaknesses: ['psychic', 'flying', 'fairy'],
				resistances: ['rock', 'bug', 'dark'],
			},
			{
				name: 'ice',
				weaknesses: ['rock', 'fire', 'fighting', 'steel'],
				resistances: ['ice'],
			},
			{
				name: 'dragon',
				weaknesses: ['ice', 'dragon', 'fairy'],
				resistances: ['water', 'electric', 'grass', 'fire'],
			},
			{
				name: 'steel',
				weaknesses: ['fire', 'ground', 'fighting'],
				resistances: ['rock', 'grass', 'psychic', 'flying', 'bug', 'normal', 'steel', 'ice', 'dragon', 'fairy'],
				immunities: ['poison'],
			},
			{
				name: 'dark',
				weaknesses: ['bug', 'fighting', 'fairy'],
				resistances: ['ghost', 'dark'],
				immunities: ['psychic'],
			},
			{
				name: 'fairy',
				weaknesses: ['poison', 'steel'],
				resistances: ['bug', 'fighting', 'dark'],
				immunities: ['dragon',]
			}
		];

		for (const update of updates) {
			try {
				await pokemonTypeActions.updatePokemonType({
					_id: typeMap[update.name]._id,
					weaknesses: update.weaknesses?.map(name => typeMap[name]._id || []),
					resistances: update.resistances?.map(name => typeMap[name]._id || []),
					immunities: update.immunities?.map(name => typeMap[name]._id || []),
				})
			} catch (err) {
				console.error(err);
				throw err;
			};
		}
		console.log(`${updates.length} pokemon types updated`)
	} catch (err) {
		console.error(err);
		throw err;
	};
};
