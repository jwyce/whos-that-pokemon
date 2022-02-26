import React from 'react';
import { FlavorTextEntry } from '../../interfaces/pokemon';

interface PokemonFlavorTextProps {
	flavorTexts: FlavorTextEntry[];
	visible: boolean;
	solution: string;
}

export const PokemonFlavorText: React.FC<PokemonFlavorTextProps> = ({
	flavorTexts,
	visible,
	solution,
}) => {
	return (
		<div hidden={!visible} className="text-center">
			{flavorTexts
				.filter((x: any) => x.language.name === 'en')[0]
				.flavor_text.replaceAll(solution.toUpperCase(), 'This POKéMON')}
		</div>
	);
};
