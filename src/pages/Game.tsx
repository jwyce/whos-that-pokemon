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
import { useFetchPokemon } from '../hooks/useFetchPokemon';

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

	const { loading, error, pokemon, species } = useFetchPokemon(
		gameState.solution
	);

	if (loading) {
		return (
			<Container alignItems="center" justify="center">
				<Loading color="primary" />
			</Container>
		);
	}

	if (error) {
		<Text h3 size="large" color="error">
			Oops! Something went wrong.
		</Text>;
	}

	console.log('species', species);

	return (
		<>
			<Header
				title="Who's that Pokemon?"
				type1={pokemon.types[0]?.type?.name ?? ''}
				type2={pokemon.types[1]?.type?.name ?? ''}
			/>
			<HealthBar health={gameState.health} />
			<div className="grid place-items-center pt-4">
				<Sprite
					url={getRandomArt(pokemon, gameState.artType)}
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
					{pokemon.types.map((type: any, index: number) => (
						<Type key={index} title={type.type.name} />
					))}
				</div>
				<div className="pt-2">
					<b>height: </b>
					{pokemon.height} decimeters
				</div>
				<div>
					<b>weight: </b>
					{pokemon.weight} hectograms
				</div>
				<div className="pt-2">{species.generation.name}</div>
				<div className="pt-2">
					{species.flavor_text_entries.at(1).flavor_text}
				</div>
				<div className="pt-2">
					<Text>
						{pokemon.abilities.map((x: any) => x.ability.name).join(', ')}
					</Text>
				</div>
			</div>
		</>
	);
};
