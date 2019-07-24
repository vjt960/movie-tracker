import React from 'react';
import FavoritePoster from '../FavoritePoster/FavoritePoster';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const Favorites = ({ favorites }) => {
  const favesDisplay = favorites.map(movie => {
    return <FavoritePoster movie={movie} key={movie.movie_id} />;
  });
  return <section className="favorites">{favesDisplay}</section>;
};

const mapStateToProps = state => ({
  favorites: state.favorites
});

Favorites.propTypes = {
  favorites: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Favorites);
