import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { loadFavorites } from '../../actions';
import inactiveFave from '../../images/012-hollywood-star.svg';
import activeFave from '../../images/011-cinema.svg';
import PropTypes from 'prop-types';
import {
  postFavorite,
  removeFavorite,
  fetchFavorites
} from '../../utilz/apiCalls';

export class MoviePoster extends React.Component {
  setHover = e => {
    e.preventDefault();
    this.props.findMovie(parseInt(e.target.closest('article').id));
  };

  cancelFocus = () => {
    this.props.cancelFocus();
  };

  handleFavorite = event => {
    event.preventDefault();
    const { user, movie, history } = this.props;
    if (user.id) {
      this.toggleFavorite(user.id, movie.movie_id);
    } else {
      history.push('/login');
    }
  };

  toggleFavorite(userID, movieID) {
    const { favorites } = this.props;
    const favoriteIDs = favorites.map(movie => movie.movie_id);
    if (!favoriteIDs.includes(movieID)) {
      this.addFavorite(userID);
      this.setState({ isFavored: true });
    } else {
      this.deleteFavorite(userID, movieID);
      this.setState({ isFavored: false });
    }
  }

  addFavorite = userID => {
    const { movie } = this.props;
    postFavorite(userID, movie).then(() =>
      fetchFavorites(userID).then(movies => this.props.loadFavorites(movies))
    );
  };

  deleteFavorite = (userID, movieID) => {
    removeFavorite(userID, movieID).then(() =>
      fetchFavorites(userID).then(movies => this.props.loadFavorites(movies))
    );
  };

  determineFavorite = () => {
    const { favorites, movie } = this.props;
    if (!favorites) {
      return inactiveFave;
    } else {
      const isFavorite = favorites.find(
        fave => fave.movie_id === movie.movie_id
      );
      return isFavorite ? activeFave : inactiveFave;
    }
  };

  render() {
    const { movie } = this.props;
    return (
      <article
        className="movie-poster"
        id={movie.movie_id}
        onMouseLeave={() => this.cancelFocus()}
      >
        <img
          src={this.determineFavorite()}
          className="favorite-icon"
          alt="fav-icon"
          onClick={e => this.handleFavorite(e)}
        />
        <NavLink
          to={`/movies/${movie.movie_id}`}
          className="movie-showcase-link"
          onMouseEnter={e => this.setHover(e)}
        >
          <img
            src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
            alt={`${movie.title}-poster`}
            className="poster-img"
            onMouseEnter={e => this.setHover(e)}
          />
        </NavLink>
        <p className="poster-title">{movie.title}</p>
      </article>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  loadFavorites: movies => dispatch(loadFavorites(movies))
});

MoviePoster.propTypes = {
  movie: PropTypes.object.isRequired
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MoviePoster)
);
