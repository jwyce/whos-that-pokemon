export enum ArtType {
	OFFICIAL = 0,
	HOME = 1,
	DREAM_WORLD = 2,
}

export const getRandomArt = (pokemon: any, artType: ArtType) => {
	switch (artType) {
		case ArtType.DREAM_WORLD:
			return pokemon.sprites.other.dream_world.front_default;
		case ArtType.HOME:
			return pokemon.sprites.other.home.front_default;
		case ArtType.OFFICIAL:
			return pokemon.sprites.other['official-artwork'].front_default;
		default:
			return pokemon.sprites.other['official-artwork'].front_default;
	}
};

export const getRandomInt = (max: number) => {
	return Math.floor(Math.random() * max);
};
