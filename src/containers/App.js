import React, { Component } from 'react';
import { loadMovies, loadComplete } from '../actions';
import { fetchMovieData } from '../utilz/apiCalls';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import MoviesDisplay from './MoviesDisplay';
import SignUpForm from './SignUpForm';
import Header from './Header';

class App extends Component {
  componentDidMount = () => {
    const { handleFetch, endLoading } = this.props;
    fetchMovieData()
      .then(data => data)
      .then(movies => handleFetch(movies))
      .then(() => endLoading());
  };

  render() {
    const { isLoading } = this.props;
    const loadingGif = 'https://cdn.dribbble.com/users/1522421/screenshots/3558724/moviespopcornsoda_5.gif'

    return (
      <main className="app">
        <Header />
        <Route exact path="/login" render={() => <LoginForm />} />
        <Route exact path="/signup" render={() => <SignUpForm />} />
        <Route exact path="/" render={() => !isLoading ? <MoviesDisplay/> : <img src={loadingGif} alt='popcorn loading gif' />} />
      </main>
    );
  }
}

export const mapStateToProps = state => {
  return { 
    movies: state.movies, 
    isLoading: state.isLoading 
  };
};

export const mapDispatchToProps = dispatch => ({
  handleFetch: movies => dispatch(loadMovies(movies)),
  endLoading: () => dispatch(loadComplete())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
