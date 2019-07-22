import React from 'react';
import { addFavorite } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
    if (this.props.user) {
      this.toggleFavorite(this.props.user.id);
    } else {
      //prompt user login form
    }
  };

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
