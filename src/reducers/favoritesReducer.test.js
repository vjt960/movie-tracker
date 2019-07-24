import { favoritesReducer } from './favoritesReducer';

describe('favoritesReducer', () => {
  it('should return inital state', () => {
    const expected = [];

    const result = favoritesReducer(undefined, []);

    expect(result).toEqual(expected);
  });

  it('should return favorite movies with LOAD_FAVORITES', () => {
    const state = [];

    const movies = [{ title: 'Wolf of Wallstreet' }, { title: 'Crooklyn' }];

    const action = {
      type: 'LOAD_FAVORITES',
      movies
    };

    const expected = [{ title: 'Wolf of Wallstreet' }, { title: 'Crooklyn' }];

    const result = favoritesReducer(state, action);

    expect(result).toEqual(expected);
  });

  it('should clear favorites with CLEAR_FAVORITES', () => {
    const state = [{ title: 'Wolf of Wallstreet' }, { title: 'Crooklyn' }];

    const action = {
      type: 'CLEAR_FAVORITES'
    };

    const expected = [];

    const result = favoritesReducer(state, action);

    expect(result).toEqual(expected);
  });
});
