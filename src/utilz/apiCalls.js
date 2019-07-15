export const fetchMovieData = () => {
  return fetch('https://api.themoviedb.org/3/discover/movie?api_key=bc73a3f54b2574050b44222a2380ea37&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=false&page=1')
  .then(res => res.json())
  .catch(error => error.message)
}

