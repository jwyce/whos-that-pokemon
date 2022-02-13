import fetch from 'node-fetch';
import fs from 'fs';
import _ from 'lodash';
import dayjs from 'dayjs';

fetch('https://pokeapi.co/api/v2/pokemon?limit=2000')
	.then((res) => res.json())
	.then((data) => {
		const pokemon = [...data.results];
		const names = pokemon.map((p) => p.name).filter((p) => !p.includes('-'));
		const shuffled = _.shuffle(names);

		const buffer = shuffled.join('\n');
		fs.writeFile(
			`pokemon-${dayjs().format('YYYY-MM-DD')}.txt`,
			buffer,
			(err) => {
				if (err) return console.log(err);
				console.log('success');
			}
		);
	});
