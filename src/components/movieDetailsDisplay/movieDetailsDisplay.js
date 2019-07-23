import React from 'react';
import PropTypes from 'prop-types';


const MovieDetailsDisplay = ({ foundMovie }) => {
  return (
    <section className="movie-details-display ">
      {foundMovie.backdrop && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${foundMovie.backdrop}`}
          alt="movie-backdrop"
          className="details-img"
        />
      )}
      <article className='movie-details-overview'>
        {foundMovie && (
          <h2 className="details details-title">
            <span className='title'>
              {foundMovie.title}
            </span>
          </h2>
        )}
        {foundMovie && (
          <p className="details details-overview">{foundMovie.overview}</p>
        )}
      </article>
    </section>
  );
};

MovieDetailsDisplay.propTypes = {
  foundMovie:  PropTypes.object.isRequired
}

export default MovieDetailsDisplay;
