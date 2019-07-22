import React, { Component } from 'react';
import { loadMovies, loadComplete, hasErrored } from '../actions';
import { fetchMovieData } from '../utilz/apiCalls';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import MoviesDisplay from './MoviesDisplay';
import SignUpForm from './SignUpForm';
import Favorites from '../components/Favorites';
import Header from './Header';

class App extends Component {
  componentDidMount = () => {
    const { loadMovies, endLoading, hasErrored } = this.props;
    try {
      fetchMovieData()
        .then(data => data)
        .then(movies => loadMovies(movies))
        .then(() => endLoading())
        .catch(error => hasErrored(error.message));
    } catch ({ message }) {
      hasErrored(message);
    }
  };

  render() {
    const { isLoading, error } = this.props;
    const loadingGif =
      'https://cdn.dribbble.com/users/1522421/screenshots/3558724/moviespopcornsoda_5.gif';

    return (
      <main className="app">
        <Header />
        <h2 className="error">{error}</h2>
        <Route exact path="/login" render={() => <LoginForm />} />
        <Route exact path="/signup" render={() => <SignUpForm />} />
        <Route
          exact
          path="/"
          render={() =>
            !isLoading ? (
              <MoviesDisplay />
            ) : (
              <img src={loadingGif} alt="popcorn loading gif" />
            )
          }
        />
        <Route exact path="/favorites" render={() => <Favorites /> } />
      </main>
    );
  }
}

export const mapStateToProps = state => {
  return {
    movies: state.movies,
    isLoading: state.isLoading,
    error: state.error,
    favorites: state.favorites
  };
};

export const mapDispatchToProps = dispatch => ({
  loadMovies: movies => dispatch(loadMovies(movies)),
  endLoading: () => dispatch(loadComplete()),
  hasErrored: errorMsg => dispatch(hasErrored(errorMsg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
