import React from 'react';
import { connect } from 'react-redux';
import {addFavorite, viewFavorites, deleteFavorite } from '../actions'
import { addNewFavorite } from '../utilz/apiCalls'
import MoviePoster from '../components/MoviePoster';
import MoviesDetailDisplay from '../components/movieDetailsDisplay';
import { setHover, cancelHover } from '../actions';

const MoviesDisplay = ({ movies, setHover, cancelHover }) => {
  const allMovies = movies.map(movie => {
    return (
      <MoviePoster
        title={movie.title}
        posterPath={movie.poster}
        key={movie.id}
        releaseDate={movie.release_date}
        addFavorite={this.props.addFavorite}
        deleteFavorite={this.props.deleteFavorite}
        id={movie.id}
        setHover={setHover}
        cancelHover={cancelHover}
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
  addFavorite: fave => dispatch(addFavorite(fave)),
  viewFavorites: allFaves => dispatch(viewFavorites(allFaves)),
  deleteFavorite: id => dispatch(deleteFavorite(id)),
  setHover:  () => dispatch(setHover()),
  cancelHover: () => dispatch(cancelHover())
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MoviesDisplay);
