import React from 'react';
import { styled } from '@stitches/react';
import { getTypeColor } from '../utils/getTypeColor';

interface TypeProps {
	title: string;
}

export const Type: React.FC<TypeProps> = ({ title }) => {
	const { bg, border } = getTypeColor(title);
	const Badge = styled('div', {
		backgroundColor: bg,
		border: `solid 1px ${border}`,
		textTransform: 'capitalize',
		borderRadius: '50px',
		padding: '2px 10px',
		fontWeight: 'bold',
	});

	return <Badge>{title}</Badge>;
};
