import React from 'react';
import { connect } from 'react-redux';
import MoviePoster from '../components/MoviePoster';
import MoviesDetailDisplay from '../components/movieDetailsDisplay';
import { setHover, cancelHover } from '../actions';

const MoviesDisplay = ({ movies }) => {

  // const handleHover = () => {

  // }

  const allMovies = movies.map(movie => {
    return (
      <MoviePoster
        title={movie.title}
        posterPath={movie.poster}
        key={movie.id}
        releaseDate={movie.releaseDate}
        // onMouseOver={this.handleHover}
        // onMouseOut={this.handleHover}
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

const mapDispatchToProps = dispatch => ({
  setHover:  () => dispatch(setHover()),
  cancelHover: () => dispatch(cancelHover())
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesDisplay);
