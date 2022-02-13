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
				size="xx-large"
				css={{
					textGradient: '45deg, $yellow500 -20%, $red500 100%',
				}}
				weight="bold"
			>
				{title}
			</Text>
		</Row>
	);
};
