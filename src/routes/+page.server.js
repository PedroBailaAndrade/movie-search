import 'dotenv/config';

export const load = async () => {
	const popularMoviesID = [
		'tt15398776',
		'tt9362930',
		'tt1517268',
		'tt13603966',
		'tt10172266',
		'tt15671028',
		'tt0439572',
		'tt1001520',
		'tt9224104',
		'tt4495098',
		'tt3427252',
		'tt9362722'
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
