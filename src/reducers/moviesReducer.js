export const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_MOVIES':
      return [...state, action.movies];
    case 'SET_HOVER':
      return state.isHovering = true;
    case 'CANCEL_HOVER':
      return state.isHovering = false;
      
    default:
      return state;
  }
}