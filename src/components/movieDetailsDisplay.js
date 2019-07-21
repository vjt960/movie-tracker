import React from 'react';

const MovieDetailsDisplay = ({ foundMovie }) => {
  console.log('movie', foundMovie)
  return (
    <section className='movie-details-display '>
      {foundMovie.backdrop &&
        <img 
        src={`https://image.tmdb.org/t/p/w500/${foundMovie.backdrop}`} alt='movie-backdrop' 
        className='details-img'/>}
      <article>
        {foundMovie && 
          <h2 className='details details-title'>{foundMovie.title}</h2>}
        {foundMovie && 
          <p className='details details-overview'>{foundMovie.overview}</p>}
        {foundMovie.vote_average && 
          <p className='details details-vote-average'>Average Rating:  {foundMovie.vote_average}/10</p>}
        {foundMovie.release_date && 
          <p className='details details-release-date'>Release Date:  {foundMovie.release_date}</p>}
      </article>
    </section>
  )
}

export default MovieDetailsDisplay;