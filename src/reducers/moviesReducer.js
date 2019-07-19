export const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_MOVIES':
      return [...state, action.movies];
    case 'SET_HOVER':
      return state.currentHover = true;
    case 'CANCEL_HOVER':
      return state.currentHover = false;
      
    default:
      return state;
  }
}