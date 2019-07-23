import React from 'react';
import FavoritePoster from '../FavoritePoster/FavoritePoster';
import { connect } from 'react-redux';

const Favorites = props => {
  const { favorites } = props;
  const favesDisplay = favorites.map(movie => {
    return <FavoritePoster movie={movie} key={movie.movie_id} />;
  });
  return <section className="favorites">{favesDisplay}</section>;
};

const mapStateToProps = state => ({
  favorites: state.favorites
});

export default connect(mapStateToProps)(Favorites);
