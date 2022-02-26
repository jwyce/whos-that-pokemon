import React from 'react';
import { Ability } from '../../interfaces/pokemon';
import { Text } from '@nextui-org/react';

interface PokemonAbilitiesProps {
	abilities: Ability[];
}

export const PokemonAbilities: React.FC<PokemonAbilitiesProps> = ({
	abilities,
}) => {
	return (
		<div>
			<Text transform="capitalize">
				<span className="font-bold">Abilities: </span>
				{abilities.map((x: any) => x.ability.name).join(', ')}
			</Text>
		</div>
	);
};
