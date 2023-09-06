import { browser } from '$app/environment';
import { get, writable } from 'svelte/store';

export const favouriteMovies = writable([]);

if (browser) {
	if (localStorage.favouriteMovies) {
		favouriteMovies.set(JSON.parse(localStorage.favouriteMovies));
	}
	favouriteMovies.subscribe((movies) => (localStorage.favouriteMovies = JSON.stringify(movies)));
}

export const addToFavouriteMovies = (movieToAdd) => {
	let movies = get(favouriteMovies);

	for (let movie of movies) {
		if (movie.imdbID === movieToAdd.imdbID) {
			return;
		}
	}

	const favouriteMovie = { ...movieToAdd };
	favouriteMovies.set([...movies, favouriteMovie]);
	return;
};

export const removeFromFavouriteMovies = (movieToRemove) => {
	let movies = get(favouriteMovies);

	const newFavouriteMovies = movies.filter((movie) => movie.imdbID !== movieToRemove.imdbID);

	favouriteMovies.set(newFavouriteMovies);
	return;
};
