import React from 'react';
import FavoritePoster from '../FavoritePoster/FavoritePoster';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Favorites = ({ favorites }) => {
  const faves = favorites.map(movie => {
    return <FavoritePoster movie={movie} key={movie.movie_id} />;
  });
  const noFaves = (
    <section className='no-faves-container'>
      <p className='no-favs-prompt'>No favorites, yet!</p>
    </section>
  );
  const favesDisplay = (favorites.length ? faves : noFaves)
  console.log(favesDisplay)
  return <section className="favorites">{favesDisplay}</section>;
};

const mapStateToProps = state => ({
  favorites: state.favorites
});

Favorites.propTypes = {
  favorites: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Favorites);
