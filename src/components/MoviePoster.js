import React from 'react';
// import { connect } from 'react-redux'
// import { addNewFavorite } from '../utilz/apiCalls'
// import { addFavorite, viewFavorites, deleteFavorite } from '../actions'
import activeFavIcon from '../images/001-heart.svg';
// import { statements } from '@babel/template';
// import { compose } from '../../../../../Library/Caches/typescript/3.4.3/node_modules/redux';
// import inactiveFavIcon from '../images/002-heart-1.svg'

class MoviePoster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavored: false
      // currentHover: false
    };
  }

  setHover = e => {
    e.preventDefault();
    // this.setState({ currentHover: !this.state.currentHover });
    this.props.findMovie(parseInt(e.target.id));
  };

  cancelFocus = () => {
    this.props.cancelFocus();
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
        <img
          src={activeFavIcon}
          className="favorite-icon"
          alt="favorite-icon"
        />
      </article>
    );
  }
}

export default MoviePoster;
