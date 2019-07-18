import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { favoritesReducer } from './favoritesReducer';
import { moviesReducer } from './moviesReducer';

const rootReducer = combineReducers({
  user: userReducer,
  favorites: favoritesReducer,
  movies: moviesReducer,
  isLoading: true
});

export default rootReducer;
