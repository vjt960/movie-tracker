import React from 'react';
import FavoritePoster from '../FavoritePoster/FavoritePoster';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Favorites = ({ favorites, isLoading }) => {
  const faves = favorites.map(movie => {
    return <FavoritePoster movie={movie} key={movie.movie_id} />;
  });
  const noFaves = (
    <section className='no-faves-container'>
      <p className='no-favs-prompt'>No favorites, yet!</p>
    </section>
  );
  const favesDisplay = (favorites.length ? faves : noFaves)
  return <section className="favorites">{!isLoading && favesDisplay}</section>;
};

const mapStateToProps = state => ({
  favorites: state.favorites,
  isLoading: state.isLoading,
});

Favorites.propTypes = {
  favorites: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Favorites);
