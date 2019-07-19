export const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_MOVIES':
      return [...state, action.movies];
    case 'SET_HOVER':
      console.log(action.id);
      return state.filter(movie => {
        return movie.id === action.id
      })
    case 'CANCEL_HOVER':
      console.log('whyyyy');
      return state.currentHover = false;
      
    default:
      return state;
  }
}