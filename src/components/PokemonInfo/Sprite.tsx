import React from 'react';
import Image from 'next/image';

interface SpriteProps {
	url: string;
	revealed: boolean;
	visible: boolean;
}

export const Sprite: React.FC<SpriteProps> = ({ url, revealed, visible }) => {
	return (
		<>
			{visible ? (
				<Image
					{...(revealed ? { className: 'silhouette' } : {})}
					src={url}
					// style={{ userSelect: 'none', height: '350px' }}
					height={350}
					width={350}
					alt="pokemon sprite"
					draggable={false}
				/>
			) : (
				<React.Fragment></React.Fragment>
			)}
		</>
	);
};
