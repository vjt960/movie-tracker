import React from 'react';

const MovieShowcase = (props) => {
  return (
    <main className='movie-showcase'>
      <section className='movie-showcase-backdrop-container'>
          <img 
            src={`https://image.tmdb.org/t/p/w1280/${props.movie.backdrop}`}
            alt={`${props.movie.title} backdrop`}
            className='movie-showcase-backdrop'/>
        </section>
        <section className='movie-showcase-details'>
          <h3><span className='title'>{props.movie.title}</span></h3>
          <p className='movie-showcase-overview'>{props.movie.overview}</p>
          <p><span className='bold'>Rating:</span>  {props.movie.vote_average}/10</p>
          <p><span className='bold'>Released:</span>  {props.movie.release_date}</p>
      </section>
    </main>
  )
}

export default MovieShowcase;