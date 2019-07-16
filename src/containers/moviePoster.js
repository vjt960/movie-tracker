import React, { Component } from 'react';
import { loadMovies } from '../actions';
import { fetchData } from '../utilz/apiCalls';
import { connect } from 'react-redux';

const MoviePoster = ({title, overview, release_date, vote_average, poster_path, id }) => {
  return(
    <article>
      <img src={isFavorited ? null : null} alt='favorite-icon'/>
      <img src={poster_path} alt={`${title}-poster`}/>
      <p>{title}</p>
    </article>
  )
}