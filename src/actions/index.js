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

export const addFavorite = () => ({
  type: 'ADD_FAVORITE'
});

export const viewFavorites = () => ({});

export const deleteFavorite = () => ({});
