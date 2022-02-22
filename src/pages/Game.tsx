import React from 'react';
import { useQuery } from 'react-query';

import { Button, Container, Loading, Text } from '@nextui-org/react';

import { Header } from '../components/Header';
import { HealthBar } from '../components/HealthBar';
import { Sprite } from '../components/Sprite';
import { Type } from '../components/Type';
import { GameState, GameStats, Status } from '../helpers/codes';
import { useStorage } from '../hooks/useLocalStorage';
import { getRandomArt, getRandomInt } from '../utils/getRandomArt';
import { todaysPokemon } from '../utils/todaysPokemon';

const initState = (): GameState => {
	const secretPokemon = todaysPokemon();

	return {
		boardState: new Array(6).fill(''),
		gameStatus: Status.IN_PROGRESS,
		lastCompletedTs: null,
		lastPlayedTs: null,
		health: 100,
		solution: secretPokemon,
		artType: getRandomInt(3),
	};
};

const initStats = (): GameStats => {
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
		console.log('Resetting game state');
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
			<Header
				title="Who's that Pokemon?"
				type1={data.types[0]?.type?.name ?? ''}
				type2={data.types[1]?.type?.name ?? ''}
			/>
			<HealthBar health={gameState.health} />
			<div className="grid place-items-center">
				<Sprite
					url={getRandomArt(data, gameState.artType)}
					hidden={gameState.gameStatus === Status.IN_PROGRESS}
				/>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '.5rem',
						paddingTop: '1rem',
					}}
				>
					{data.types.map((type: any, index: number) => (
						<Type key={index} title={type.type.name} />
					))}
				</div>
				<div className="pt-2">
					<b>height: </b>
					{data.height} decimeters
				</div>
				<div>
					<b>weight: </b>
					{data.weight} hectograms
				</div>
			</div>
		</>
	);
};
