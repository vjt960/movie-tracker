import React from 'react';
import { connect } from 'react-redux';
import MoviePoster from '../components/MoviePoster';
import MoviesDetailDisplay from '../components/movieDetailsDisplay';

const MoviesDisplay = ({ movies }) => {
  const allMovies = movies.map(movie => {
    return (
      <MoviePoster
        title={movie.title}
        posterPath={movie.poster}
        key={movie.id}
        id={movie.id}
        releaseDate={movie.releaseDate}
        // setHover={setHover}
        // cancelHover={cancelHover}
      />
    );
  });
  return (
  <section className="movie-display">
    <section className='movie-details'>
      <MoviesDetailDisplay />
    </section>
    <section className='movies-scroll'>
      {allMovies}
    </section>
  </section>
  );
};

const mapStateToProps = state => {
  return { movies: state.movies[0] };
};

// const mapDispatchToProps = dispatch => ({
//   setHover:  (title) => dispatch(setHover(title)),
//   cancelHover: () => dispatch(cancelHover())
// })

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(MoviesDisplay);
