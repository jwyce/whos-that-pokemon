export interface Pokemon {
	abilities: Ability[];
	height: number;
	weight: number;
	id: number;
	name: string;
	sprites: Sprite;
	types: Type[];
}

export interface Ability {
	ability: { name: string };
}

export interface Sprite {
	front_default: string;
	other: {
		dream_world: { front_default: string };
		'official-artwork': { front_default: string };
	};
}

export interface Type {
	type: { name: string };
}

export interface PokemonSpecies {
	flavor_text_entries: FlavorTextEntry[];
	generation: { name: string };
	names: PokemonName[];
	pokedex_numbers: PokedexNumber[];
}

export interface FlavorTextEntry {
	flavor_text: string;
	language: { name: string };
}

export interface PokemonName {
	name: string;
	language: { name: string };
}

export interface PokedexNumber {
	entry_number: number;
	pokedex: { name: string };
}
