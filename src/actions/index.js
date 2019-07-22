export const loadMovies = movies => ({
  type: 'LOAD_MOVIES',
  movies
});

export const loadComplete = () => ({
  type: 'LOAD_COMPLETE'
});

export const hasErrored = errorMessage => ({
  type: 'HAS_ERRORED',
  errorMessage
});

export const clearError = () => ({
  type: 'CLEAR_ERROR'
});

export const signIn = user => ({
  type: 'SIGN_IN',
  user
});

export const signOut = () => ({
  type: 'SIGN_OUT'
});

export const clearFavorites = () => ({
  type: 'CLEAR_FAVORITES'
});

export const createAcct = user => ({
  type: 'CREATE_ACCT',
  user
});

export const loadFavorites = movies => ({
  type: 'LOAD_FAVORITES',
  movies
});

export const focusMovie = movie => ({
  type: 'FOCUS_MOVIE',
  movie
});

export const cancelFocus = () => ({
  type: 'CANCEL_FOCUS'
});
