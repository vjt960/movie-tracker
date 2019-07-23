import { fetchMovieData, fetchUser, postNewUser } from './apiCalls';

describe('fetchMovieData', () => {
  let mockMovies;

  beforeEach(() => {
    mockMovies = [
          {
              "vote_count": 411,
              "id": 420818,
              "video": false,
              "vote_average": 7,
              "title": "The Lion King",
              "popularity": 585.503,
              "poster_path": "/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg",
              "original_language": "en",
              "original_title": "The Lion King",
              "genre_ids": [
                  12,
                  16,
                  10751,
                  18,
                  28
              ],
              "backdrop_path": "/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
              "adult": false,
              "overview": "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
              "release_date": "2019-07-12"
          },
          {
              "vote_count": 2094,
              "id": 429617,
              "video": false,
              "vote_average": 7.8,
              "title": "Spider-Man: Far from Home",
              "popularity": 302.212,
              "poster_path": "/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg",
              "original_language": "en",
              "original_title": "Spider-Man: Far from Home",
              "genre_ids": [
                  28,
                  12,
                  878
              ],
              "backdrop_path": "/dihW2yTsvQlust7mSuAqJDtqW7k.jpg",
              "adult": false,
              "overview": "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
              "release_date": "2019-06-28"
          }
        ]

  
    window.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMovies)
      });
    });
  })

  it('should call fetch with the correct url', () => {
    const expected =
      'https://api.themoviedb.org/3/movie/now_playing?api_key=bc73a3f54b2574050b44222a2380ea37&language=en-US&sort_by=now_playing.dsc&include_adult=false&include_video=false&page=1';

    fetchMovieData();

    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it.skip('HAPPY: should return a response if promise resolves', async () => {
    await expect(fetchMovieData()).resolves.toEqual(mockMovies);

  });

  it.skip('SAD: should throw an error if promise rejects', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({
        ok: false
      });
    });

    await expect(fetchMovieData()).rejects.toEqual(
      Error('Error fetching movies')
    );
  });
})




  describe('fetchUser', () => {
    let mockEmail;
    let mockPassword

    beforeEach(() => {
        mockEmail = 'email'
        mockPassword = 'password'

      window.fetch = jest.fn().mockImplementation(() => {
        Promise.resolve({
          ok: true,
          json: Promise.resolve({email: mockEmail, password: mockPassword})
        });
      });
    });

    it.skip('should call fetch with appropriate params',  () => {
      const expected = ['http://localhost:3000/api/users',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: mockEmail, password: mockPassword })
        }]

      fetchUser(mockEmail, mockPassword)
    
      expect(window.fetch).toHaveBeenCalledWith(...expected)
  });

  it.skip('HAPPY: should return a response if status is ok', async () => {
    const mockResponse = {
      id: 1,
      name: 'Taylor',
      email: mockEmail,
      password: mockPassword
    }

    await expect(fetchUser(mockEmail, mockPassword)).resolves.toEqual(mockResponse)

  });

  it.skip('SAD: should throw an error is status is not ok', () => {

  });

});

// describe('postNewUser', () => {

// })



