import { moviesReducer, focusMovieReducer } from './moviesReducer';

describe('moviesReducer', () => {
  it('should return inital state', () => {
    const expected = [];

    const result = moviesReducer(undefined, []);

    expect(result).toEqual(expected);
  });

  it('should update movies state with LOAD_MOVIES', () => {
    const state = [];

    const movies = [{ title: 'Sex and the City' }, { title: 'Hereditary' }];

    const action = {
      type: 'LOAD_MOVIES',
      movies
    };

    const expected = [{ title: 'Sex and the City' }, { title: 'Hereditary' }];

    const result = moviesReducer(state, action);

    expect(result).toEqual(expected);
  });

  describe('focusMovieReducer', () => {
    it('should return initial state', () => {
      const expected = {};

      const result = focusMovieReducer(undefined, {});

      expect(result).toEqual(expected);
    });

    it('should update focusedMovie with FOCUS_MOVIE', () => {
      const state = {};

      const movie = { title: 'Aladdin' };

      const action = {
        type: 'FOCUS_MOVIE',
        movie
      };

      const expected = { title: 'Aladdin' };

      const result = focusMovieReducer(state, action);

      expect(result).toEqual(expected);
    });

    it('should restore default state with CANCEL_FOCUS', () => {
      const state = { title: 'Adventures in Babysitting' };

      const action = {
        type: 'CANCEL_FOCUS'
      };

      const expected = {};

      const result = focusMovieReducer(state, action);

      expect(result).toEqual(expected);
    });
  });
});
