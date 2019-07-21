export const loadMovies = movies => ({
  type: 'LOAD_MOVIES',
  movies
});

export const loadComplete = () => ({
  type: 'LOAD_COMPLETE'
});

export const signIn = user => ({
  type: 'SIGN_IN',
  user
});

export const signOut = () => ({
  type: 'SIGN_OUT'
});

export const createAcct = (name, email, password) => ({
  type: 'CREATE_ACCT',
  name,
  email,
  password
});

export const hasErrored = errorMessage => ({
  type: 'HAS_ERRORED',
  errorMessage
});

export const addFavorite = id => ({
  type: 'ADD_FAVORITE',
  id
});

export const focusMovie = movie => ({
  type: 'FOCUS_MOVIE',
  movie
});

export const cancelHover = id => ({
  type: 'CANCEL_HOVER',
  id
});

// export const viewFavorites = () => ({});

export const deleteFavorite = () => ({});
