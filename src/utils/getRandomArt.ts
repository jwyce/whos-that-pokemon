export enum ArtType {
	OFFICIAL = 0,
	HOME = 1,
	DREAM_WORLD = 2,
}

export const getRandomArt = (pokemon: any, artType: ArtType) => {
	const defaultArt = pokemon.sprites.other['official-artwork'].front_default;

	switch (artType) {
		case ArtType.DREAM_WORLD:
			return pokemon.sprites?.other?.dream_world?.front_default || defaultArt;
		case ArtType.HOME:
			return pokemon.sprites?.other?.home?.front_default || defaultArt;
		case ArtType.OFFICIAL:
		default:
			return defaultArt;
	}
};

export const getRandomInt = (max: number) => {
	return Math.floor(Math.random() * max);
};
