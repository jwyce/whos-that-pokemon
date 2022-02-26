import React from 'react';

interface PokemonSizeProps {
	height: number;
	weight: number;
}

export const PokemonSize: React.FC<PokemonSizeProps> = ({ height, weight }) => {
	return (
		<div className="flex gap-4 justify-center items-center">
			<div>
				<b>Height: </b>
				{height} decimeters
			</div>
			<div>
				<b>Weight: </b>
				{weight} hectograms
			</div>
		</div>
	);
};
