export const fetchMovieData = async () => {
  const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=bc73a3f54b2574050b44222a2380ea37&language=en-US&sort_by=now_playing.dsc&include_adult=false&include_video=false&page=1';
  const response = await fetch(url);
  const movieData = await response.json();
  return movieData.results
};

export const fetchUser = async (email, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email:  email, password:  password })
  }
  const url = 'http://localhost:3000/api/users'
  fetch(url, options)
  .then(res => res.json())
  .then(data => console.log(data.data))
  // const response = await fetch(url, options);
  // const userData = await response.json();
  // console.log(userData);
  // return userData
};



