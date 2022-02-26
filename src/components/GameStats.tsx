import { Card, Container, Modal, Progress, Text } from '@nextui-org/react';
import { GameStats as GameStatsType } from '../helpers/codes';
import React from 'react';
import { HealthBar } from './HealthBar';

interface GameStatsProps {
	stats: GameStatsType;
	visible: boolean;
	closeHandler: () => void;
}

export const GameStats: React.FC<GameStatsProps> = ({
	stats,
	visible,
	closeHandler,
}) => {
	return (
		<Modal
			closeButton
			width="550px"
			blur
			aria-labelledby="modal-title"
			open={visible}
			onClose={closeHandler}
		>
			<Modal.Header>
				<Text id="modal-title" size={18} b transform="uppercase">
					Statistics
				</Text>
			</Modal.Header>
			<Modal.Body>
				<div className="flex items-center justify-center gap-3">
					<Card>
						<Text h1 css={{ textAlign: 'center' }}>
							{stats.gamesPlayed}
						</Text>
						<Text size={12} css={{ textAlign: 'center' }}>
							Played
						</Text>
					</Card>
					<Card>
						<Text h1 css={{ textAlign: 'center' }}>
							{stats.winPercent}
						</Text>
						<Text size={12} css={{ textAlign: 'center' }}>
							Win %
						</Text>
					</Card>
					<Card>
						<Text h1 css={{ textAlign: 'center' }}>
							{stats.currentStreak}
						</Text>
						<Text size={12} css={{ textAlign: 'center' }}>
							Current Streak
						</Text>
					</Card>
					<Card>
						<Text h1 css={{ textAlign: 'center' }}>
							{stats.maxStreak}
						</Text>
						<Text size={12} css={{ textAlign: 'center' }}>
							Max Streak
						</Text>
					</Card>
				</div>
				<Container style={{ textAlign: 'center' }}>
					<Text
						h2
						size={18}
						css={{
							textGradient: '45deg, $green500 -10%, $cyan500 100%',
						}}
						weight="bold"
					>
						Avg Score: {stats.averageScore}
					</Text>
					<Progress
						value={stats.averageScore}
						color="success"
						size="lg"
						status="success"
						shadow
					/>
				</Container>
			</Modal.Body>
		</Modal>
	);
};