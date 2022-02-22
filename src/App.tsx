import './index.css';

import { QueryClient, QueryClientProvider } from 'react-query';

import { Game } from './pages/Game';
import { createTheme, NextUIProvider } from '@nextui-org/react';

const darkTheme = createTheme({
	type: 'dark',
	theme: {
		colors: {
			// brand colors
			background: '#0b0f18',
			text: '#fff',
			// you can also create your own color
			myDarkColor: '#ff4ecd',
			// ...  more colors
		},
		space: {},
		fonts: {},
	},
});

function App() {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<NextUIProvider theme={darkTheme}>
				<Game />
			</NextUIProvider>
		</QueryClientProvider>
	);
}

export default App;
