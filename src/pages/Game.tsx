import dayjs from 'dayjs';
import React from 'react';
import { useQuery } from 'react-query';

import { Button, Container, Loading, Text } from '@nextui-org/react';

import { Header } from '../components/Header';
import { GameState, GameStats, Status } from '../helpers/codes';
import { useStorage } from '../hooks/useLocalStorage';
import { todaysPokemon } from '../utils/todaysPokemon';
import { Sprite } from '../components/Sprite';

const initState = () => {
	const secretPokemon = todaysPokemon();

	return {
		boardState: new Array(6).fill(''),
		gameStatus: Status.IN_PROGRESS,
		lastCompletedTs: null,
		lastPlayedTs: null,
		solution: secretPokemon,
	};
};

const initStats = () => {
	return {
		averageGuesses: 0,
		averageScore: 0,
		gamesPlayed: 0,
		gamesWon: 0,
		winPercent: 0,
		maxStreak: 0,
		currentStreak: 0,
	};
};

export const Game: React.FC<{}> = ({}) => {
	const [gameState, setState] = useStorage<GameState>('gameState', initState());
	const [gameStats, setStats] = useStorage<GameStats>('gameStats', initStats());
	if (gameState.solution !== todaysPokemon()) {
		setState(initState());
	}

	const { isLoading, data, error } = useQuery('secret', async () => {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${gameState.solution}/`
		);
		if (!response.ok) {
			throw new Error('Network response error');
		}
		return response.json();
	});

	if (isLoading) {
		return (
			<Container alignItems="center" justify="center">
				<Loading color="primary">Primary</Loading>
			</Container>
		);
	}

	return (
		<>
			<Header title="Who's that Pokemon?" />
			<div className="grid place-items-center">
				<Sprite
					url={data.sprites.front_default}
					hidden={gameState.gameStatus === Status.IN_PROGRESS}
				/>
			</div>
		</>
	);
};
