import { combineReducers } from 'redux';
import { userReducer, errorReducer } from './userReducer';
import { favoritesReducer } from './favoritesReducer';
import { moviesReducer, focusMovieReducer } from './moviesReducer';
import { loadingReducer } from './loadingReducer';

const rootReducer = combineReducers({
  user: userReducer,
  favorites: favoritesReducer,
  movies: moviesReducer,
  focusedMovie: focusMovieReducer,
  isLoading: loadingReducer,
  error: errorReducer
});

export default rootReducer;
