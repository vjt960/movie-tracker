import React from 'react';

const MoviePoster = ({title, overview, releaseDate, vote_average, posterPath, id }) => {
  return(
    <article className='movie-poster'>
      {/* <img src={isFavorited ? null : null} alt='favorite-icon'/> */}
      <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={`${title}-poster`} className='poster-img'/>
      <p className='poster-title'>{title}</p>
    </article>
  )
}

export default MoviePoster;