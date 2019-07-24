import {
  fetchMovieData,
  fetchFavorites,
  fetchUser,
  postNewUser,
  postFavorite,
  removeFavorite
} from './apiCalls';
import { apiKey } from './apiKey';

describe('apiCalls', () => {
  describe('fetchMovieData', () => {
    let mockMovies;
    let cleanedMovies;

    beforeEach(() => {
      mockMovies = [
        {
          id: 1,
          title: 'Simba Tries Turing',
          vote_average: 5,
          poster_path: './example_path',
          backdrop_path: './example_path',
          overview: 'overview text',
          release_date: '11/24/2019'
        }
      ];

      cleanedMovies = [
        {
          movie_id: 1,
          title: 'Simba Tries Turing',
          vote_average: 5,
          poster_path: './example_path',
          backdrop: './example_path',
          overview: 'overview text',
          release_date: '11/24/2019'
        }
      ];

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ results: mockMovies })
        });
      });
    });

    it('should be called with the correct URL', () => {
      const expected = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&sort_by=now_playing.dsc&include_adult=false&include_video=false&page=1`;
      fetchMovieData();
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('should return cleaned movie data (HAPPY)', async () => {
      const result = await fetchMovieData();
      expect(result).toEqual(cleanedMovies);
    });

    it('should return an error if status is not ok (SAD)', () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.reject({
          message: 'Sorry. Unable to retrieve movies.'
        });
      });
      expect(fetchMovieData()).rejects.toEqual(
        Error('Sorry. Unable to retrieve movies.')
      );
    });
  });

  describe('fetchFavorites', () => {
    let mockFavorites;
    beforeEach(() => {
      mockFavorites = [{ title: 'Shrek' }, { title: 'Space Jam' }];
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ data: mockFavorites })
        });
      });
    });

    it('should be called with the right URL', () => {
      const mockID = 1;
      const expected = `http://localhost:3000/api/users/${mockID}/favorites`;
      fetchFavorites(1);
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('should return a parsed response (HAPPY)', async () => {
      const result = await fetchFavorites();
      expect(result).toEqual(mockFavorites);
    });

    it('should return an error if status is not ok (SAD)', async () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({ ok: false });
      });
      const result = await fetchFavorites();
      expect(result).toEqual('Sorry. Unable to retrieve favorites.');
    });
  });

  describe('fetchUser', () => {
    let mockResponse;

    beforeEach(() => {
      mockResponse = { name: 'Chungus' };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ data: mockResponse })
        });
      });
    });

    it('should be called with the correct URL', () => {
      const expected = [
        'http://localhost:3000/api/users',
        {
          body: '{}',
          headers: { 'Content-Type': 'application/json' },
          method: 'POST'
        }
      ];
      fetchUser();
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return a user', async () => {
      const result = await fetchUser();
      expect(result).toEqual(mockResponse);
    });

    it('should return an error if response is not ok', async () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(fetchUser()).rejects.toEqual(
        Error('Sorry. Incorrect email or password.')
      );
    });
  });

  describe('postNewUser', () => {
    let mockResponse;

    beforeEach(() => {
      mockResponse = 7;
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it('should be called with the correct URL', () => {
      const expected = [
        'http://localhost:3000/api/users/new',
        {
          body: '{}',
          headers: { 'Content-Type': 'application/json' },
          method: 'POST'
        }
      ];
      postNewUser();
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return a parsed response', async () => {
      const result = await postNewUser();
      expect(result).toEqual(mockResponse);
    });

    it('should return an error if status is not ok', async () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(postNewUser()).rejects.toEqual(
        Error('Sorry. An account with that email already exists.')
      );
    });
  });

  describe('postFavorite', () => {
    let mockResponse;
    let mockMovie;
    let mockUserID;

    beforeEach(() => {
      mockResponse = 8675309;
      mockUserID = 9;
      mockMovie = {
        movie_id: 1,
        title: 'Simba Tries Turing',
        vote_average: 5,
        poster_path: './example_path',
        backdrop_path: './example_path',
        overview: 'overview text',
        release_date: '11/24/2019'
      };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it('should be called with the correct params', () => {
      const expected = [
        'http://localhost:3000/api/users/favorites/new',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            movie_id: mockMovie.movie_id,
            user_id: mockUserID,
            title: mockMovie.title,
            poster_path: mockMovie.poster_path,
            release_date: mockMovie.release_date,
            vote_average: mockMovie.vote_average,
            overview: mockMovie.overview
          })
        }
      ];
      postFavorite(mockUserID, mockMovie);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return a parsed response', async () => {
      const result = await postFavorite(mockUserID, mockMovie);
      expect(result).toEqual(mockResponse);
    });

    it('should return an error message if response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      const result = await postFavorite(mockUserID, mockMovie);
      expect(result).toEqual('Error adding favorite');
    });
  });

  describe('removeFavorite', () => {
    let mockUserID;
    let mockMovieID;
    let mockResponse;

    beforeEach(() => {
      mockUserID = 111;
      mockMovieID = 999;
      mockResponse = [{ id: 5 }];
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it('should be called with the right params', () => {
      const expected = [
        `http://localhost:3000/api/users/${mockUserID}/favorites/${mockMovieID}`,
        { method: 'DELETE', headers: { 'Content-Type': 'application/json' } }
      ];
      removeFavorite(mockUserID, mockMovieID);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return a parsed response', async () => {
      const result = await removeFavorite(mockUserID, mockMovieID);
      expect(result).toEqual(mockResponse);
    });

    it('should return an error message if response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      const result = await removeFavorite(mockUserID, mockMovieID);
      expect(result).toEqual('Error trying to unfavorite movie');
    });
  });
});
