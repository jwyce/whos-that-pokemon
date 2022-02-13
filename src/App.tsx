import { Button, Text } from '@nextui-org/react';
import { Header } from './components/Header';
import './index.css';
import { todaysPokemon } from './utils/todaysPokemon';

function App() {
	const secretPokemon = todaysPokemon();
	return (
		<div className="bg-gray-800 h-full">
			<Header title="Who's that Pokemon?" />
		</div>
	);
}

export default App;
