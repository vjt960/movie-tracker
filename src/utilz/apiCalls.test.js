import { fetchMovieData, fetchUser, postNewUser } from './apiCalls';

describe('fetchMovieData', () => {
  let mockMovies = [
    {
      vote_count: 1888,
      id: 429617,
      vote_average: 7.8,
      title: 'Spider-Man: Far from Home',
      poster_path: '/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg',
      backdrop_path: '/dihW2yTsvQlust7mSuAqJDtqW7k.jpg',
      overview:
        'Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.',
    }
  ];

  window.fetch = jest.fn().mockImplementation(() => {
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockMovies)
    });
  });

  it('should call fetch with the correct url', () => {
    const expected =
      'https://api.themoviedb.org/3/movie/now_playing?api_key=bc73a3f54b2574050b44222a2380ea37&language=en-US&sort_by=now_playing.dsc&include_adult=false&include_video=false&page=1';

    fetchMovieData();

    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('HAPPY: should return a response if promise resolves', async () => {
    await expect(fetchMovieData()).resolves.toEqual(mockMovies);
    
  });

  it('SAD: should throw an error if promise rejects', async () => {
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




//   describe('fetchUser', () => {
//     let email;
//     let password

//     beforeEach(() => {
//         email = 'email'
//         password = 'password'

//       window.fetch = jest.fn().mockImplementation(() => {
//         Promise.resolve({
//           ok: true,
//           json: Promise.resolve(user)
//         })
//       })
//     })
//     it('should call fetch with appropriate params',  () => {
//       const options = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: email, password: password })
//         }

//       const url = 'http://localhost:3000/api/users'

//       fetchUser()
    
//       expect(window.fetch).toHaveBeenCalledWith(url, options)
//   })

// });

// describe('postNewUser', () => {

// })



