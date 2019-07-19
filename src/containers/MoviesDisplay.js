import React from 'react';
import { connect } from 'react-redux';
import {addFavorite, viewFavorites, deleteFavorite } from '../actions'
import MoviePoster from '../components/MoviePoster';

const MoviesDisplay = ({ movies }) => {
  const allMovies = movies.map(movie => {
    return (
      <MoviePoster
        title={movie.title}
        posterPath={movie.poster_path}
        key={movie.id}
        releaseDate={movie.release_date}
        addFavorite={this.props.addFavorite}
        deleteFavorite={this.props.deleteFavorite}
      />
    );
  });
  return <section className="movies-display">{allMovies}</section>;
};

const mapStateToProps = state => {
  return { movies: state.movies[0] };
};

const mapDispatchToProps = dispatch => ({
  addFavorite: fave => dispatch(addFavorite(fave)),
  viewFavorites: allFaves => dispatch(viewFavorites(allFaves)),
  deleteFavorite: id => dispatch(deleteFavorite(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesDisplay);
