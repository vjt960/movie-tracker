const cleanMovieData = movieData => {
  return movieData.map(movie => {
    return {
      movie_id: movie.id,
      title: movie.title,
      vote_average: movie.vote_average,
      poster_path: movie.poster_path,
      backdrop: movie.backdrop_path,
      overview: movie.overview,
      release_date: movie.release_date
    };
  });
};

export default cleanMovieData;
