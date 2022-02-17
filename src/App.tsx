import './index.css';

import { Button, Text } from '@nextui-org/react';

import { Header } from './components/Header';
import { GameState, GameStats, Status } from './helpers/codes';
import { useStorage } from './hooks/useLocalStorage';
import { todaysPokemon } from './utils/todaysPokemon';

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

function App() {
	const [gameState, setState] = useStorage<GameState>('gameState', initState());
	const [gameStats, setStats] = useStorage<GameStats>('gameStats', initStats());

	return (
		<div className="bg-gray-800 h-full">
			<Header title="Who's that Pokemon?" />
		</div>
	);
}

export default App;
