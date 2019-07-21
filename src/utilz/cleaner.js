const cleanMovieData = (movieData) => {
  return movieData.map(movie => {
    return {
      id: movie.id,
      title: movie.title,
      voteAverage: movie.vote_average,
      poster: movie.poster_path,
      backdrop: movie.backdrop_path,
      overview: movie.overview,
      releaseDate: movie.release_date
    }
  })
}

export default cleanMovieData;