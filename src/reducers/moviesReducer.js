export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_MOVIES':
      return [...state, ...action.movies];
    default:
      return state;
  }
};

export const focusMovieReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FOCUS_MOVIE':
      return action.movie;
    case 'CANCEL_FOCUS':
      return (state = {});
    default:
      return state;
  }
};
