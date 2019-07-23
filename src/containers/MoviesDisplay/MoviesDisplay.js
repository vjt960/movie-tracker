import React from 'react';
import { connect } from 'react-redux';
import MoviePoster from '../../components/MoviePoster/MoviePoster';
import MoviesDetailDisplay from '../../components/movieDetailsDisplay/movieDetailsDisplay';
import { focusMovie, cancelFocus } from '../../actions';

const MoviesDisplay = ({
  movies,
  error,
  focusMovie,
  focusedMovie,
  cancelFocus
}) => {
  const findMovie = id => {
    const foundMovie = movies.find(movie => movie.movie_id === id);
    focusMovie(foundMovie);
  };

  const allMovies = movies.map(movie => {
    return (
      <MoviePoster
        movie={movie}
        key={movie.movie_id}
        findMovie={findMovie}
        cancelFocus={cancelFocus}
      />
    );
  });

  return (
    <section className="movie-display">
      <section className="movie-details">
        <MoviesDetailDisplay foundMovie={focusedMovie} />
      </section>
      <section className="movies-scroll">
        {allMovies ? allMovies : error}
      </section>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    movies: state.movies,
    focusedMovie: state.focusedMovie,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => ({
  focusMovie: movie => dispatch(focusMovie(movie)),
  cancelFocus: () => dispatch(cancelFocus())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesDisplay);
