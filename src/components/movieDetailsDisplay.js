import React from 'react';

const MovieDetailsDisplay = ({ foundMovie }) => {
  console.log('movie', foundMovie)
  return (
    <section className='movie-details-display '>
      {foundMovie && <p>{foundMovie.title}</p>}
      {foundMovie && <p>{foundMovie.overview}</p>}
      {foundMovie && <p>{foundMovie.vote_average}</p>}
      {foundMovie && <p>{foundMovie.release_date}</p>}
    </section>
  )
}

export default MovieDetailsDisplay;