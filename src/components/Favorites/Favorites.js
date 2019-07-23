import React from 'react';
import MoviePoster from '../MoviePoster/MoviePoster';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Favorites = ({ favorites }) => {
  const favesDisplay = favorites.map(movie => {
    return <MoviePoster movie={movie} key={movie.movie_id} />;
  });
  return <section className="favorites">{favesDisplay}</section>;
};

const mapStateToProps = state => ({
  favorites: state.favorites
});

Favorites.propTypes = {
  favorites:  PropTypes.array.isRequired
}

export default connect(mapStateToProps)(Favorites);
