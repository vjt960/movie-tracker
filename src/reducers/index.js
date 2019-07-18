import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { favoritesReducer } from './favoritesReducer';
import { moviesReducer } from './moviesReducer';
import { loadingReducer } from './loadingReducer';

const rootReducer = combineReducers({
  user: userReducer,
  favorites: favoritesReducer,
  movies: moviesReducer,
  isLoading: loadingReducer
});

export default rootReducer;
