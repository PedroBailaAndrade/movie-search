import 'dotenv/config';

export const load = async ({ params }) => {
	const response = await fetch(
		`${process.env.OMDB_API_BASE_URL}apikey=${process.env.OMDB_API_KEY}&i=${params.id}`
	);

	const data = await response.json();

	if (response.ok) {
		if (data.Error) {
			return {
				error: true
			};
		}
		return {
			movie: data
		};
	} else {
		return {
			error: true
		};
	}
};
