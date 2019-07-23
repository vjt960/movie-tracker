import React from 'react';
import MoviePoster from '../MoviePoster/MoviePoster';
import { connect } from 'react-redux';

const Favorites = props => {
  const { favorites } = props;
  const favesDisplay = favorites.map(movie => {
    return <MoviePoster movie={movie} key={movie.movie_id} />;
  });
  return <section className="favorites">{favesDisplay}</section>;
};

const mapStateToProps = state => ({
  favorites: state.favorites
});

export default connect(mapStateToProps)(Favorites);
