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

export const createAcct = (user) => ({
  type: 'CREATE_ACCT',
  user
});

export const addFavorite = () => ({
  type: 'ADD_FAVORITE'
});

export const viewFavorites = () => ({
    type: 'VIEW_FAVORITES'
});

export const deleteFavorite = () => ({
    type: 'DELETE_FAVORITES'
});
