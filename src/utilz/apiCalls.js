import cleanMovieData from './cleaner';

export const fetchMovieData = async () => {
  try {
    const url =
      'https://api.themoviedb.org/3/movie/now_playing?api_key=bc73a3f54b2574050b44222a2380ea37&language=en-US&sort_by=now_playing.dsc&include_adult=false&include_video=false&page=1';
    const response = await fetch(url);
    const parsedData = await response.json();
    const movieData = cleanMovieData(parsedData.results);
    return movieData;
  } catch (error) {
    throw Error('Error fetching movies');
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
    throw new Error(error.message);
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
    throw new Error(error.message);
  }
}

  export const addNewFavorite = async (movieId, userId, title, posterPath, releaseDate, voteAverage, overview) => {
    try {
      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: {
          movie_id: movieId,
          user_id: userId,
          title: title,
          posterPath: poster_path,
          releaseDate: release_date,
          voteAverage: vote_Average,
          overview: overview
         }
      }
      const url = 'http://localhost:3000/api/users/favorites/new'
      const getFavorites = await fetch(url, options)
      const response = await getFavorites.json()
      console.log(response.id)

    } catch(error) {
      throw Error('Error adding favorite')
    }
  };
