import 'dotenv/config';

export const load = async () => {
	const popularMoviesID = [
		'tt15398776',
		'tt9362930',
		'tt1517268',
		'tt13603966',
		'tt10172266',
		'tt15671028'
	];

	const requests = popularMoviesID.map(async (id) => {
		const response = await fetch(
			`${process.env.OMDB_API_BASE_URL}apikey=${process.env.OMDB_API_KEY}&i=${id}`
		);
		if (response.ok) return await response.json();
	});

	const fetchPopularMovies = await Promise.all(requests);

	return {
		popularMovies: fetchPopularMovies
	};
};
