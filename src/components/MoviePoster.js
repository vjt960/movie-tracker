import React from 'react';
// import activeFavIcon from '../images/001-heart.svg';

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
        <button
          className="favorite-icon"
          onClick={() => console.log('click fave')}
        >
          <span>favorite</span>
        </button>
      </article>
    );
  }
}

export default MoviePoster;
