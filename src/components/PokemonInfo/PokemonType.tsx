import React from 'react';

import { Type as TypeInfo } from '../../interfaces/pokemon';
import { Type } from '../Type';

interface TypeProps {
	types: TypeInfo[];
}

export const PokemonType: React.FC<TypeProps> = ({ types }) => {
	return (
		<div className="flex gap-2 justify-center items-center">
			{types.map((type: any, index: number) => (
				<Type key={index} title={type.type.name} />
			))}
		</div>
	);
};
