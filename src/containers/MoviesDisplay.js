import React from 'react';
import { connect } from 'react-redux';
import MoviePoster from '../components/MoviePoster';
import MoviesDetailDisplay from '../components/movieDetailsDisplay';
import { focusMovie, cancelFocus } from '../actions';


const MoviesDisplay = ({ movies, focusMovie, focusedMovie, cancelFocus }) => {

  const findMovie = (id) => {
    const foundMovie = movies.find(movie => movie.movie_id === id)
    focusMovie(foundMovie)
  }

  const allMovies = movies.map(movie => {
    return (
      <MoviePoster
        title={movie.title}
        posterPath={movie.poster_path}
        key={movie.movie_id}
        id={movie.movie_id}
        releaseDate={movie.release_date}
        findMovie={findMovie}
        cancelFocus={cancelFocus}
      />
    );
  });
  

  return (
  <section className="movie-display">
    <section className='movie-details'>
      <MoviesDetailDisplay foundMovie={focusedMovie}/>
    </section>
    <section className='movies-scroll'>
      {allMovies}
    </section>
  </section>
  );
};

const mapStateToProps = state => {
  return { 
    movies: state.movies[0],
    focusedMovie: state.focusedMovie
  };
};

const mapDispatchToProps = dispatch => ({
  focusMovie: (movie) => dispatch(focusMovie(movie)),
  cancelFocus: () => dispatch(cancelFocus())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesDisplay);
