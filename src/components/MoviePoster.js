import React from 'react';

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

  handleFavorite = () => {
    if (this.props.user) {
      this.toggleFavorite(this.props.user.id);
    } else {
      //prompt user login form
    }
  };

  toggleFavorite = userID => {
    const {
      id,
      title,
      posterPath,
      releaseDate,
      voteAvg,
      overview
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
    fetch(url, options).then(movieID => movieID);
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

mapDispatchToProps = dispatch => ({
  //
});

export default MoviePoster;
