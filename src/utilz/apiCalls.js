import cleanMovieData from './cleaner';
import { apiKey } from './apiKey';

export const fetchMovieData = async () => {
  try {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&sort_by=now_playing.dsc&include_adult=false&include_video=false&page=1`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Sorry. Unable to retrieve movies.');
    }
    const data = await response.json();
    const movies = cleanMovieData(data.results);
    return movies;
  } catch ({ message }) {
    throw new Error(message);
  }
};

export const fetchFavorites = async userID => {
  const url = `http://localhost:3000/api/users/${userID}/favorites`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Sorry. Unable to retrieve favorites.');
    }
    const favorites = await response.json();
    return favorites.data;
  } catch ({ message }) {
    return message;
  }
};

export const fetchUser = async (email, password) => {
  try {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password })
    };
    const url = 'http://localhost:3000/api/users';
    const getUserData = await fetch(url, options);
    if (!getUserData.ok) {
      throw new Error('Sorry. Incorrect email or password.');
    }
    const response = await getUserData.json();
    const userData = await response.data;
    return userData;
  } catch (error) {
    return error.message;
  }
};

export const postNewUser = async (name, email, password) => {
  try {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, email: email, password: password })
    };
    const url = 'http://localhost:3000/api/users/new';
    const getUserData = await fetch(url, options);
    if (!getUserData.ok) {
      throw new Error('Sorry. An account with that email already exists.');
    }
    const response = await getUserData.json();
    return response;
  } catch (error) {
    return error.message;
  }
};

export const postFavorite = async (userID, movie) => {
  const url = 'http://localhost:3000/api/users/favorites/new';
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      movie_id: movie.movie_id,
      user_id: userID,
      title: movie.title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      overview: movie.overview
    })
  };
  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw Error('Error adding favorite');
      } else {
        return response.json();
      }
    })
    .catch(error => error.message);
};

export const removeFavorite = (userID, movieID) => {
  const url = `http://localhost:3000/api/users/${userID}/favorites/${movieID}`;
  const options = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  };
  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw Error('Error trying to unfavorite movie');
      } else {
        return response.json();
      }
    })
    .catch(error => error.message);
};
