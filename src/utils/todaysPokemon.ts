import { getPokemonList } from './getPokemonList';
import dayjs from 'dayjs';

export const todaysPokemon = () => {
	const start = dayjs('2022-02-14');
	const end = dayjs();
	const index = end.diff(start, 'day');

	const pokemon = getPokemonList()[index];
	return pokemon;
};
