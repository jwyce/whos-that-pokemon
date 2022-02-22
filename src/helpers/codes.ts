import { ArtType } from '../utils/getRandomArt';

export enum Status {
	IN_PROGRESS = 'IN_PROGRESS',
	WIN = 'WIN',
	FAIL = 'FAIL',
}

export type GameState = {
	boardState: string[];
	gameStatus: Status;
	lastCompletedTs: Date | null;
	lastPlayedTs: Date | null;
	artType: ArtType;
	health: number;
	solution: string;
};

export type GameStats = {
	averageGuesses: number;
	averageScore: number;
	gamesPlayed: number;
	gamesWon: number;
	winPercent: number;
	maxStreak: number;
	currentStreak: number;
};
