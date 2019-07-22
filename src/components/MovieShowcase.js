import React from 'react';

const MovieShowcase = (props) => {
  return (
    <section className='movie-showcase'>
      <h1>{props.title}</h1>
      <p>{props}</p>
    </section>
  )
}

export default MovieShowcase;