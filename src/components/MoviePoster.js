import React from 'react';
import activeFavIcon from '../images/001-heart.svg'
// import inactiveFavIcon from '../images/002-heart-1.svg'

const MoviePoster = ({title, overview, releaseDate, vote_average, posterPath, id, setHover, cancelHover }) => {
  return(
    <article className='movie-poster'>
      <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={`${title}-poster`} className='poster-img'/>
      <p className='poster-title'>{title}</p>
      <img src={activeFavIcon} className='favorite-icon' alt='favorite-icon'/>
    </article>
  )
}

export default MoviePoster;