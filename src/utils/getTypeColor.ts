export const getTypeColor = (type: string) => {
	switch (type) {
		case 'normal':
			return { bg: '#A8A878', border: '#6D6D4E' };
		case 'fire':
			return { bg: '#F08030', border: '#9C531F' };
		case 'fighting':
			return { bg: '#C03028', border: '#7D1F1A' };
		case 'water':
			return { bg: '#6890F0', border: '#445E9C' };
		case 'flying':
			return { bg: '#A890F0', border: '#6D5E9C' };
		case 'grass':
			return { bg: '#78C850', border: '#4E8234' };
		case 'poison':
			return { bg: '#A040A0', border: '#682A68' };
		case 'electric':
			return { bg: '#F8D030', border: '#A1871F' };
		case 'ground':
			return { bg: '#E0C068', border: '#927D44' };
		case 'psychic':
			return { bg: '#F85888', border: '#A13959' };
		case 'rock':
			return { bg: '#B8A038', border: '#786824' };
		case 'ice':
			return { bg: '#98D8D8', border: '#638D8D' };
		case 'bug':
			return { bg: '#A8B820', border: '#6D7815' };
		case 'dragon':
			return { bg: '#7038F8', border: '#4924A1' };
		case 'ghost':
			return { bg: '#705898', border: '#493963' };
		case 'dark':
			return { bg: '#705848', border: '#49392F' };
		case 'steel':
			return { bg: '#B8B8D0', border: '#787887' };
		case 'fairy':
			return { bg: '#EE99AC', border: '#9B6470' };
		default:
			return { bg: '#68A090', border: '#44685E' };
	}
};
