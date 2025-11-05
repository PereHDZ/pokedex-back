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
        }  catch (err) {
            console.error(err);
            throw err;
        };
    }
    console.warn(`${types.length} POKEMON TYPES CREATED`);
};
