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

export const signIn = user => ({
  type: 'SIGN_IN',
  user
});

export const signOut = () => ({
  type: 'SIGN_OUT'
});

export const createAcct = (user) => ({
  type: 'CREATE_ACCT',
  user
});


export const addFavorite = fave => ({
    type: 'ADD_FAVORITE',
    fave
});

export const viewFavorites = () => ({
    type: 'VIEW_FAVORITES'
});

export const deleteFavorite = () => ({
    type: 'DELETE_FAVORITES'
});

export const focusMovie = movie => ({
  type: 'FOCUS_MOVIE',
  movie
});

export const cancelFocus = () => ({
  type: 'CANCEL_FOCUS',
});


