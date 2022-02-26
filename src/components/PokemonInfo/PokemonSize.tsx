import React from 'react';

interface PokemonSizeProps {
	height: number;
	weight: number;
	visible: boolean;
}

export const PokemonSize: React.FC<PokemonSizeProps> = ({
	height,
	weight,
	visible,
}) => {
	return (
		<div
			className={`flex gap-4 justify-center items-center ${
				visible ? '' : 'hidden'
			}`}
		>
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
