import { useQuery } from 'react-query';
import { Pokemon, PokemonSpecies } from '../interfaces/pokemon';

export const useFetchPokemon = (solution: string) => {
	const {
		isLoading: loading,
		data: pokemon,
		error,
	} = useQuery<Pokemon, Error>(
		'pokemon',
		async () => {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${solution}/`
			);
			if (!response.ok) {
				throw new Error('Network response error');
			}
			return response.json();
		},
		{ cacheTime: 0 }
	);

	const delimeterPos = solution.indexOf('-');
	const speciesName =
		delimeterPos > -1 ? solution.substring(0, delimeterPos) : solution;

	const {
		isLoading: loading2,
		data: species,
		error: error2,
	} = useQuery<PokemonSpecies, Error>(
		'species',
		async () => {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon-species/${speciesName}`
			);
			if (!response.ok) {
				throw new Error('Network response error');
			}
			return response.json();
		},
		{ cacheTime: 0 }
	);

	return {
		loading: loading || loading2,
		pokemon,
		species,
		error: error || error2,
	};
};
