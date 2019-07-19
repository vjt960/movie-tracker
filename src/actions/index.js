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


export const addFavorite = (fave) => ({
  type: 'ADD_FAVORITE',
  fave
});

export const viewFavorites = (allFaves) => ({
    type: 'VIEW_FAVORITES',
    allFaves
});

export const deleteFavorite = (id) => ({
    type: 'DELETE_FAVORITE',
    id
});
