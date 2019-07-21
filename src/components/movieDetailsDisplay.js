import React from 'react';

const MovieDetailsDisplay = ({ foundMovie }) => {
  console.log('movie', foundMovie)
  return (
    <section className='movie-details-display '>
      {foundMovie && 
        <p className='details-title'>{foundMovie.title}</p>}
      {foundMovie && 
        <p className='details-overview'>{foundMovie.overview}</p>}
      {foundMovie && 
        <p className='details-vote-average'>{foundMovie.vote_average}</p>}
      {foundMovie && 
        <p className='details-release-date'>{foundMovie.release_date}</p>}
    </section>
  )
}

export default MovieDetailsDisplay;