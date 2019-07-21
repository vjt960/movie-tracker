import React from 'react';
import activeFavIcon from '../images/001-heart.svg'
// import inactiveFavIcon from '../images/002-heart-1.svg'

class MoviePoster extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFavored: false,
      currentHover: false
    }
  }

  handleHover = (e) => {
    console.log(e.target.id)
  };

  render() {
    return(
      <article className='movie-poster'>
        <img 
          src={`https://image.tmdb.org/t/p/w500/${this.props.posterPath}`} 
          alt={`${this.props.title}-poster`} 
          className='poster-img' id={`poster-${this.props.id}`}
          onMouseEnter={(e) => this.handleHover(e)}
        />
        <p className='poster-title'>{this.props.title}</p>
        <img src={activeFavIcon} className='favorite-icon' alt='favorite-icon'/>
      </article>
    )
  }
}



export default MoviePoster;