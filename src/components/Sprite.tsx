import React from 'react';

interface SpriteProps {
	url: string;
	hidden: boolean;
}

export const Sprite: React.FC<SpriteProps> = ({ url, hidden }) => {
	return (
		<img
			{...(hidden ? { className: 'silhouette' } : {})}
			src={url}
			height={300}
			width={300}
		/>
	);
};
