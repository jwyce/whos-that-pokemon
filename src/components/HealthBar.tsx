import { Container, Progress, Text } from '@nextui-org/react';
import React from 'react';

interface HealthBarProps {
	health: number;
}

export const HealthBar: React.FC<HealthBarProps> = ({ health }) => {
	return (
		<Container style={{ maxWidth: '800px', textAlign: 'center' }}>
			<Text
				h2
				size={30}
				css={{
					textGradient: '45deg, $red500 -10%, $pink500 100%',
				}}
				weight="bold"
			>
				Health: {health}
			</Text>
			<Progress value={health} color="error" size="lg" status="error" shadow />
		</Container>
	);
};
