import React from 'react';
import { PokedexNumber } from '../../interfaces/pokemon';

interface GenerationDexNumProps {
	generation: { name: string };
	dexnums: PokedexNumber[];
	visible: boolean;
}

export const GenerationDexNum: React.FC<GenerationDexNumProps> = ({
	generation,
	dexnums,
	visible,
}) => {
	return (
		<div className={`capitalize ${visible ? '' : 'hidden'}`}>
			<span className="font-bold">
				{generation.name.split('-')[0]}-
				<span className="uppercase ">{generation.name.split('-')[1]}</span>
			</span>
			: #{dexnums.filter((x) => x.pokedex.name === 'national')[0].entry_number}
		</div>
	);
};
