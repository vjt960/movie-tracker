import * as actions from './index';

describe('actions', () => {
  it('should have a type of LOAD_MOVIES', () => {
    const movies = [
      {
        vote_count: 1888,
        id: 429617,
        video: false,
        vote_average: 7.8,
        title: 'Spider-Man: Far from Home',
        popularity: 417.77,
        poster_path: '/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg',
        original_language: 'en',
        original_title: 'Spider-Man: Far from Home',
        genre_ids: [28, 12, 878],
        backdrop_path: '/dihW2yTsvQlust7mSuAqJDtqW7k.jpg',
        adult: false,
        overview:
          'Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.',
        release_date: '2019-06-28'
      }
    ];

    const expectedAction = {
      type: 'LOAD_MOVIES',
      movies: [
        {
          vote_count: 1888,
          id: 429617,
          video: false,
          vote_average: 7.8,
          title: 'Spider-Man: Far from Home',
          popularity: 417.77,
          poster_path: '/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg',
          original_language: 'en',
          original_title: 'Spider-Man: Far from Home',
          genre_ids: [28, 12, 878],
          backdrop_path: '/dihW2yTsvQlust7mSuAqJDtqW7k.jpg',
          adult: false,
          overview:
            'Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.',
          release_date: '2019-06-28'
        }
      ]
    };

    const result = actions.loadMovies(movies);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of LOAD_COMPLETE', () => {
      const expectedAction = {
          type: 'LOAD_COMPLETE'
      }

      const result = actions.loadComplete();

      expect(result).toEqual(expectedAction)
  })

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

  it('should have a type of CREATE_ACCT', () => {
      const user = {
        name: 'Arya',
        email: 'agirlhasnoemail@aol.com',
        password: 'IheartTheHound',
        id: 1000
      }

      const expectedAction = {
          type: 'CREATE_ACCT',
          user
      }

      const result = actions.createAcct(user)

      expect(result).toEqual(expectedAction)
  });

  it('should have a type of ADD_FAVORITE', () => {

  });

  it('should have a type of VIEW_FAVORITES', () => {});

  it('should have a type of DELETE_FAVORITE', () => {})
});
