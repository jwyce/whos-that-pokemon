import './index.css';

import { QueryClient, QueryClientProvider } from 'react-query';

import { Game } from './pages/Game';

function App() {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<Game />
		</QueryClientProvider>
	);
}

export default App;
