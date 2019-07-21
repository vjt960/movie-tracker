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
  render() {
    return(
      <article className='movie-poster' onMouseEnter={() => this.props.setHover(this.props.id)}>
        <img src={`https://image.tmdb.org/t/p/w500/${this.props.posterPath}`} alt={`${this.props.title}-poster`} className='poster-img'/>
        <p className='poster-title'>{this.props.title}</p>
        <img src={activeFavIcon} className='favorite-icon' alt='favorite-icon'/>
      </article>
    )
  }
}



export default MoviePoster;