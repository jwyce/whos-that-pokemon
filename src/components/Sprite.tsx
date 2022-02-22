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
			style={{ userSelect: 'none', height: '350px' }}
			draggable={false}
		/>
	);
};
