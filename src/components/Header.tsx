import React from 'react';
import { Row, Text } from '@nextui-org/react';
import { getTypeColor } from '../utils/getTypeColor';

interface HeaderProps {
	title: string;
	type1: string;
	type2?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, type1, type2 }) => {
	const { bg: color1, border } = getTypeColor(type1);
	const { bg } = getTypeColor(type2 ?? '');
	const color2 = type2 ? bg : border;

	return (
		<Row justify="center" align="center">
			<Text
				h1
				size="xxx-large"
				css={{
					textGradient: `45deg, ${color1} 0%, ${color2} 100%`,
				}}
				weight="bold"
			>
				{title}
			</Text>
		</Row>
	);
};
