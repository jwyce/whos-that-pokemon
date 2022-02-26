import React from 'react';
import { Button, Row, Text } from '@nextui-org/react';
import { getTypeColor } from '../utils/getTypeColor';
import { Chart } from 'react-iconly';
import { GameStats } from './GameStats';
import { GameStats as GameStatsType } from '../helpers/codes';

interface HeaderProps {
	title: string;
	type1: string;
	type2?: string;
	stats: GameStatsType;
}

export const Header: React.FC<HeaderProps> = ({
	title,
	type1,
	type2,
	stats,
}) => {
	const { bg: color1, border } = getTypeColor(type1);
	const { bg } = getTypeColor(type2 ?? '');
	const color2 = type2 ? bg : border;
	const [visible, setVisible] = React.useState(false);
	const handler = () => setVisible(true);
	const closeHandler = () => {
		setVisible(false);
	};

	return (
		<Row justify="center" align="center" gap={2}>
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
			<Button
				auto
				color="secondary"
				icon={<Chart filled />}
				shadow
				onClick={handler}
			/>
			<GameStats visible={visible} closeHandler={closeHandler} stats={stats} />
		</Row>
	);
};
