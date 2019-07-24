import React from 'react';
import PropTypes from 'prop-types';

const MovieShowcase = ({ movie }) => {
  return (
    <main className='movie-showcase'>
      <section className='movie-showcase-backdrop-container'>
          <img 
            src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop}`}
            alt={`${movie.title} backdrop`}
            className='movie-showcase-backdrop'/>
        </section>
        <section className='movie-showcase-details'>
          <h3><span className='title'>{movie.title}</span></h3>
          <p className='movie-showcase-overview'>{movie.overview}</p>
          <p className='movie-showcase-vote-avg'><span className='bold'>Rating:</span>  {movie.vote_average}/10</p>
          <p><span className='bold'>Released:</span>  {movie.release_date}</p>
      </section>
    </main>
  )
}

MovieShowcase.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MovieShowcase;