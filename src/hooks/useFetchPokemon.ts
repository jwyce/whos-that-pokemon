import { useQuery } from 'react-query';

export const useFetchPokemon = (solution: string) => {
	const {
		isLoading: loading,
		data: pokemon,
		error,
	} = useQuery('pokemon', async () => {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${solution}/`
		);
		if (!response.ok) {
			throw new Error('Network response error');
		}
		return response.json();
	});

	const delimeterPos = solution.indexOf('-');
	const speciesName =
		delimeterPos > -1 ? solution.substring(0, delimeterPos) : solution;

	const {
		isLoading: loading2,
		data: species,
		error: error2,
	} = useQuery('species', async () => {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon-species/${speciesName}`
		);
		if (!response.ok) {
			throw new Error('Network response error');
		}
		return response.json();
	});

	return {
		loading: loading || loading2,
		pokemon,
		species,
		error: error || error2,
	};
};
