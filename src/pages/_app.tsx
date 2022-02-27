import '../../styles/globals.css';

import { QueryClient, QueryClientProvider } from 'react-query';

import { createTheme, NextUIProvider } from '@nextui-org/react';

import type { AppProps } from 'next/app';
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

function SafeHydrate({ children }: any) {
	return (
		<div suppressHydrationWarning>
			{typeof window === 'undefined' ? null : children}
		</div>
	);
}

function WhosThatPokemon({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<NextUIProvider theme={darkTheme}>
				<SafeHydrate>
					<Component {...pageProps} />
				</SafeHydrate>
			</NextUIProvider>
		</QueryClientProvider>
	);
}

export default WhosThatPokemon;
