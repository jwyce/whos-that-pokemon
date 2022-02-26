import React from 'react';
import { Ability } from '../../interfaces/pokemon';
import { Text } from '@nextui-org/react';

interface PokemonAbilitiesProps {
	abilities: Ability[];
	visible: boolean;
}

export const PokemonAbilities: React.FC<PokemonAbilitiesProps> = ({
	abilities,
	visible,
}) => {
	return (
		<div hidden={!visible}>
			<Text transform="capitalize">
				<span className="font-bold">Abilities: </span>
				{abilities.map((x: any) => x.ability.name).join(', ')}
			</Text>
		</div>
	);
};
