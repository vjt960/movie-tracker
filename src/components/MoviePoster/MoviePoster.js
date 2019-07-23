import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { loadFavorites } from '../../actions';
import inactiveFave from '../../images/012-hollywood-star.svg';
import activeFave from '../../images/011-cinema.svg';
import {
  postFavorite,
  removeFavorite,
  fetchFavorites
} from '../../utilz/apiCalls';

class MoviePoster extends React.Component {
  constructor() {
    super();
    this.state = {
      isFavored: false
    };
  }

  setHover = e => {
    e.preventDefault();
    this.props.findMovie(parseInt(e.target.id));
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
    console.log('deleteFavorite firing...');
    removeFavorite(userID, movieID).then(() =>
      fetchFavorites(userID).then(movies => this.props.loadFavorites(movies))
    );
  };

  render() {
    const { movie } = this.props;
    return (
      <article className="movie-poster">
        <img
          src={this.state.isFavored ? activeFave : inactiveFave}
          className="favorite-icon"
          alt="fav-icon"
          onClick={e => this.handleFavorite(e)}
        />
        <NavLink
          to={`/movies/${movie.movie_id}`}
          className="movie-showcase-link"
        >
          <img
            src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
            alt={`${movie.title}-poster`}
            className="poster-img"
            id={`${movie.movie_id}`}
            onMouseEnter={e => this.setHover(e)}
            onMouseLeave={() => this.cancelFocus()}
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MoviePoster)
);
