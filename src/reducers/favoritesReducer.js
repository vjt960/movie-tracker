export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_FAVORITES':
      return action.movies;
    case 'CLEAR_FAVORITES':
      return [];

    default:
      return state;
  }
};
