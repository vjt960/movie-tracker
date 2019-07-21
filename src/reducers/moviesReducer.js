export const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_MOVIES':
      return [...state, action.movies];
    case 'SET_HOVER':
      console.log(action.id);
      const updateHover = state[0].map(movie => {
        return movie.id === action.id ?
          movie.currentHover = true :
          movie.currentHover = false;
      })
      return updateHover;
    case 'CANCEL_HOVER':
      console.log('whyyyy');
      return state.currentHover = false;
      
    default:
      return state;
  }
}