import confetti from 'canvas-confetti';
import * as levenshtein from 'fast-levenshtein';
import React, { useState } from 'react';

import {
	Button,
	Container,
	Input,
	Loading,
	Spacer,
	Text,
} from '@nextui-org/react';

import { Header } from '../components/Header';
import { HealthBar } from '../components/HealthBar';
import { GenerationDexNum } from '../components/PokemonInfo/GenerationDexNum';
import { PokemonAbilities } from '../components/PokemonInfo/PokemonAbilities';
import { PokemonFlavorText } from '../components/PokemonInfo/PokemonFlavorText';
import { PokemonSize } from '../components/PokemonInfo/PokemonSize';
import { PokemonType } from '../components/PokemonInfo/PokemonType';
import { Sprite } from '../components/PokemonInfo/Sprite';
import { GameState, GameStats, Status } from '../helpers/codes';
import { useFetchPokemon } from '../hooks/useFetchPokemon';
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
		averageScore: 0,
		gamesPlayed: 0,
		gamesWon: 0,
		winPercent: 0,
		maxStreak: 0,
		currentStreak: 0,
	};
};

const handleConfetti = () => {
	confetti({
		zIndex: 999,
		particleCount: 100,
		spread: 70,
		origin: { x: 0.5, y: 0.8 },
	});
};

export const Game: React.FC<{}> = ({}) => {
	const [gameState, setState] = useStorage<GameState>('gameState', initState());
	const [gameStats, setStats] = useStorage<GameStats>('gameStats', initStats());
	const [guess, setGuess] = useState<string>('');
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

	const makeGuess = () => {
		const dist = levenshtein.get(
			guess.toLowerCase(),
			gameState.solution.toLowerCase()
		);

		if (dist > 2) {
			setGuess('');
			setState({
				...gameState,
				health: gameState.health - 10,
				lastPlayedTs: new Date().getTime(),
			});

			if (gameState.health <= 10) {
				setGuess('');
				setState({
					...gameState,
					health: gameState.health - 10,
					lastCompletedTs: new Date().getTime(),
					lastPlayedTs: new Date().getTime(),
					gameStatus: Status.FAIL,
				});
				setStats({
					...gameStats,
					gamesPlayed: gameStats.gamesPlayed + 1,
					currentStreak: 0,
					winPercent: (gameStats.gamesWon / (gameStats.gamesPlayed + 1)) * 100,
					averageScore:
						(gameStats.averageScore * gameStats.gamesPlayed) /
						(gameStats.gamesPlayed + 1),
				});
			}
		} else {
			setGuess('');
			setState({
				...gameState,
				lastCompletedTs: new Date().getTime(),
				lastPlayedTs: new Date().getTime(),
				gameStatus: Status.WIN,
			});
			setStats({
				...gameStats,
				gamesPlayed: gameStats.gamesPlayed + 1,
				gamesWon: gameStats.gamesWon + 1,
				maxStreak: Math.max(gameStats.maxStreak, gameStats.currentStreak + 1),
				currentStreak: gameStats.currentStreak + 1,
				winPercent:
					((gameStats.gamesWon + 1) / (gameStats.gamesPlayed + 1)) * 100,
				averageScore:
					(gameStats.averageScore * gameStats.gamesPlayed + gameState.health) /
					(gameStats.gamesPlayed + 1),
			});
			handleConfetti();
		}
	};

	return (
		<div style={{ maxWidth: '800px', margin: 'auto' }}>
			{error || !pokemon || !species ? (
				<Text h3 size="large" color="error">
					Oops! Something went wrong.
				</Text>
			) : (
				<>
					<Header
						title="Who's that Pokemon?"
						type1={pokemon.types[0].type.name}
						type2={pokemon.types[1]?.type?.name ?? ''}
						stats={gameStats}
					/>

					<HealthBar health={gameState.health} />
					<Spacer y={2} />
					<div className="grid place-items-center pt-4">
						<PokemonType types={pokemon.types} />
						<PokemonSize
							height={pokemon.height}
							weight={pokemon.weight}
							visible={
								gameState.health <= 90 || gameState.gameStatus === Status.WIN
							}
						/>
						<GenerationDexNum
							generation={species.generation}
							dexnums={species.pokedex_numbers}
							visible={
								gameState.health <= 80 || gameState.gameStatus === Status.WIN
							}
						/>
						<PokemonAbilities
							abilities={pokemon.abilities}
							visible={
								gameState.health <= 70 || gameState.gameStatus === Status.WIN
							}
						/>
						<PokemonFlavorText
							solution={gameState.solution}
							flavorTexts={species.flavor_text_entries}
							visible={
								gameState.health <= 50 || gameState.gameStatus === Status.WIN
							}
						/>

						<div
							className="text-center"
							onMouseEnter={() => {
								if (gameState.gameStatus === Status.WIN) {
									handleConfetti();
								}
							}}
						>
							<Sprite
								url={getRandomArt(pokemon, gameState.artType)}
								revealed={gameState.gameStatus === Status.IN_PROGRESS}
								visible={
									gameState.health <= 20 || gameState.gameStatus === Status.WIN
								}
							/>
							<Spacer y={2} />

							<Text
								h2
								size={41}
								weight="bold"
								transform="capitalize"
								hidden={gameState.gameStatus === Status.IN_PROGRESS}
							>
								It's {gameState.solution}!!
							</Text>
						</div>
						<div
							className={`flex gap-4 justify-center items-center pt-1 ${
								gameState.gameStatus !== Status.IN_PROGRESS ? 'hidden' : ''
							}`}
						>
							<Input
								clearable
								bordered
								labelPlaceholder="Pokemon name"
								value={guess}
								onChange={(e) => setGuess(e.target.value)}
								onKeyDown={(e) => {
									if (e.key === 'Enter') {
										makeGuess();
									}
								}}
							/>
							<Button color="gradient" auto onClick={makeGuess}>
								Guess
							</Button>
						</div>
					</div>
				</>
			)}
		</div>
	);
};
