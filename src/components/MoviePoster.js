import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadFavorites } from '../actions';
import {
  postFavorite,
  removeFavorite,
  fetchFavorites
} from '../utilz/apiCalls';

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
    } else {
      this.deleteFavorite(userID, movieID);
    }
  }

  addFavorite = userID => {
    const {
      id,
      title,
      posterPath,
      releaseDate,
      voteAvg,
      overview,
      targetMovie,
      addFavorite
    } = this.props;
    const url = 'http://localhost:3000//api/users/favorites/new';
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        movie_id: id,
        user_id: userID,
        title,
        poster_path: posterPath,
        release_date: releaseDate,
        vote_average: voteAvg,
        overview
      })
    };
    fetch(url, options)
      .then(movieID => targetMovie(movieID))
      .then(movie => addFavorite(movie));
  };

  deleteFavorite = () => {
    //
  };

  render() {
    return (
      <article className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500/${this.props.posterPath}`}
          alt={`${this.props.title}-poster`}
          className="poster-img"
          id={`${this.props.id}`}
          onMouseEnter={e => this.setHover(e)}
          onMouseLeave={() => this.cancelFocus()}
        />
        <p className="poster-title">{this.props.title}</p>
        <button className="favorite-icon" onClick={e => this.handleFavorite(e)}>
          <span>favorite</span>
        </button>
      </article>
    );
  }
}

const mapStateToProps = state => ({
  targetMovie: id => state.movies.find(movie => movie.id === id),
  favorites: state.favorites,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  addFavorite: movie => dispatch(addFavorite(movie))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MoviePoster)
);
