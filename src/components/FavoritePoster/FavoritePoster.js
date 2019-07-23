import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadFavorites } from '../../actions';
import { removeFavorite, fetchFavorites } from '../../utilz/apiCalls';

const FavoritePoster = ({ user, movie, loadFavorites }) => {
  const handleFavorite = event => {
    event.preventDefault();
    deleteFavorite(user.id, movie.movie_id);
  };

  const deleteFavorite = (userID, movieID) => {
    removeFavorite(userID, movieID).then(() =>
      fetchFavorites(userID).then(movies => loadFavorites(movies))
    );
  };

  return (
    <article className="fave-poster" id={movie.movie_id}>
      <header className="poster-header">
        <button
          className={'fave-toggle'}
          onClick={event => handleFavorite(event)}
        >
          <span>favorite</span>
        </button>
      </header>
      <img
        src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
        alt={`${movie.title}-poster`}
        className="fave-poster-img"
      />
      <p className="poster-title">{movie.title}</p>
    </article>
  );
};

const mapStateToProps = state => ({
  favorites: state.favorites,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  loadFavorites: movies => dispatch(loadFavorites(movies))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FavoritePoster)
);
