import React from 'react';

interface SpriteProps {
	url: string;
	revealed: boolean;
	visible: boolean;
}

export const Sprite: React.FC<SpriteProps> = ({ url, revealed, visible }) => {
	return (
		<img
			{...(revealed ? { className: 'silhouette' } : {})}
			src={url}
			style={{ userSelect: 'none', height: '350px' }}
			draggable={false}
			hidden={!visible}
		/>
	);
};
