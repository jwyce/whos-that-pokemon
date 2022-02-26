import React from 'react';
import { FlavorTextEntry } from '../../interfaces/pokemon';

interface PokemonFlavorTextProps {
	flavorTexts: FlavorTextEntry[];
	visible: boolean;
}

export const PokemonFlavorText: React.FC<PokemonFlavorTextProps> = ({
	flavorTexts,
	visible,
}) => {
	return (
		<div hidden={!visible}>
			{flavorTexts.filter((x: any) => x.language.name === 'en')[0].flavor_text}
		</div>
	);
};
