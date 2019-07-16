import React, { Component } from 'react';
import { loadMovies } from '../actions';
import { fetchData } from '../utilz/apiCalls';
import { connect } from 'react-redux';

const MoviesDisplay