import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { favoritesReducer } from './favoritesReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  favorites: favoritesReducer,
  user: userReducer
})

export default rootReducer;