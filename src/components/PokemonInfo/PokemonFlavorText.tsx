import React from 'react';
import { FlavorTextEntry } from '../../interfaces/pokemon';

interface PokemonFlavorTextProps {
	flavorTexts: FlavorTextEntry[];
}

export const PokemonFlavorText: React.FC<PokemonFlavorTextProps> = ({
	flavorTexts,
}) => {
	return (
		<div>
			{flavorTexts.filter((x: any) => x.language.name === 'en')[0].flavor_text}
		</div>
	);
};
