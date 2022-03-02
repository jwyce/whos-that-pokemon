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
					height={300}
					width={300}
					layout="responsive"
					alt="pokemon sprite"
					draggable={false}
				/>
			) : (
				<React.Fragment></React.Fragment>
			)}
		</>
	);
};
