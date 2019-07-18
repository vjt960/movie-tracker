import React from 'react';
import { connect } from 'react-redux';
import MoviePoster from '../components/MoviePoster';

const MoviesDisplay = ({ movies }) => {
  const allMovies = movies.map(movie => {
    return (
      <MoviePoster
        title={movie.title}
        posterPath={movie.poster_path}
        key={movie.id}
        releaseDate={movie.release_date}
      />
    );
  });
  return <section className="movies-display">{allMovies}</section>;
};

const mapStateToProps = state => {
  return { movies: state.movies[0] };
};

export default connect(mapStateToProps)(MoviesDisplay);
