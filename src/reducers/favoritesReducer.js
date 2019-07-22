export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.movie];

    case 'VIEW_FAVORITES':
      return action.allFaves;

    case 'DELETE_FAVORITE':
      return state.filter(fave => fave.id !== action.id);

    default:
      return state;
  }
};
