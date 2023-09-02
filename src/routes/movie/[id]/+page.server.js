import 'dotenv/config';

export const load = async ({ params }) => {
	const response = await fetch(
		`${process.env.OMDB_API_BASE_URL}apikey=${process.env.OMDB_API_KEY}&i=${params.id}`
	);

	const data = await response.json();

	if (response.ok) {
		return {
			movieDetails: data
		};
	}
};
