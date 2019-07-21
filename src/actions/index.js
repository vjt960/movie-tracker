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


export const addFavorite = id => ({
    type: 'ADD_FAVORITE',
    id
});

export const viewFavorites = () => ({
    type: 'VIEW_FAVORITES'
});

export const deleteFavorite = () => ({
    type: 'DELETE_FAVORITES'
});

export const setHover = id => ({
  type: 'SET_HOVER',
  id
});

export const cancelHover = id => ({
  type: 'CANCEL_HOVER',
  id
});


