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
          <h2>{props.movie.title}</h2>
          <p>{props.movie.overview}</p>
          <p>{props.movie.vote_average}/10</p>
          <p>Released:  {props.movie.release_date}</p>
      </section>
    </main>
  )
}

export default MovieShowcase;