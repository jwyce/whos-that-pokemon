import React from 'react';
import { Row, Text } from '@nextui-org/react';

interface HeaderProps {
	title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
	return (
		<Row justify="center" align="center">
			<Text
				h1
				size="xxx-large"
				css={{
					textGradient: '45deg, #F08030 -20%, #6890F0 100%',
				}}
				weight="bold"
			>
				{title}
			</Text>
		</Row>
	);
};
