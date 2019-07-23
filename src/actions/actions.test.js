import * as actions from './index';

describe('actions', () => {
  it('should have a type of LOAD_MOVIES', () => {
    const movies = [{ title: 'Spider-Man: Far from Home' }];

    const expectedAction = {
      type: 'LOAD_MOVIES',
      movies: [{ title: 'Spider-Man: Far from Home' }]
    };

    const result = actions.loadMovies(movies);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of LOAD_COMPLETE', () => {
    const expectedAction = {
      type: 'LOAD_COMPLETE'
    };

    const result = actions.loadComplete();

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of HAS_ERRORED', () => {
    const errorMessage = 'Error loading';

    const expectedAction = {
      type: 'HAS_ERRORED',
      errorMessage
    };

    const result = actions.hasErrored(errorMessage);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of CLEAR_ERROR', () => {
    const expectedAction = { type: 'CLEAR_ERROR' };
    const result = actions.clearError();
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SIGN_IN', () => {
    const user = {
      name: 'Arya',
      email: 'agirlhasnoemail@aol.com',
      password: 'IheartTheHound',
      id: 1000
    };

    const expectedAction = {
      type: 'SIGN_IN',
      user: {
        name: 'Arya',
        email: 'agirlhasnoemail@aol.com',
        password: 'IheartTheHound',
        id: 1000
      }
    };

    const result = actions.signIn(user);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SIGN_OUT', () => {
    const expectedAction = {
      type: 'SIGN_OUT'
    };

    const result = actions.signOut();

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of CLEAR_FAVORITES', () => {
    const expectedAction = { type: 'CLEAR_FAVORITES' };
    const result = actions.clearFavorites();
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of CREATE_ACCT', () => {
    const user = {
      name: 'Arya',
      email: 'agirlhasnoemail@aol.com',
      password: 'IheartTheHound',
      id: 1000
    };

    const expectedAction = {
      type: 'CREATE_ACCT',
      user
    };

    const result = actions.createAcct(user);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of LOAD_FAVORITES', () => {
    const mockMovies = [{ title: 'movie_1' }, { title: 'movie_2' }];
    const expectedAction = { type: 'LOAD_FAVORITES', movies: mockMovies };
    const result = actions.loadFavorites(mockMovies);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of FOCUS_MOVIE', () => {
    const mockMovie = { title: 'movie_1' };
    const expectedAction = { type: 'FOCUS_MOVIE', movie: mockMovie };
    const result = actions.focusMovie(mockMovie);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of CANCEL_FOCUS', () => {
    const expectedAction = { type: 'CANCEL_FOCUS' };
    const result = actions.cancelFocus();
    expect(result).toEqual(expectedAction);
  });
});
