import React, { Component } from 'react';
import { loadMovies, loadComplete, hasErrored } from '../../actions';
import { fetchMovieData } from '../../utilz/apiCalls';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
// import loadingGif from '../../images/loading.gif';
import LoginForm from '../LoginForm/LoginForm';
import MoviesDisplay from '../MoviesDisplay/MoviesDisplay';
import SignUpForm from '../SignUpForm/SignUpForm';
import Favorites from '../../components/Favorites/Favorites';
import Header from '../../containers/Header/Header';
import MovieShowcase from '../../components/MovieShowcase/MovieShowcase';

 export class App extends Component {
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
      'https://i.pinimg.com/originals/ec/d6/bc/ecd6bc09da634e4e2efa16b571618a22.gif';
    const loading = (
      <section className="loading-gif-container">
        <img src={loadingGif} alt="loading-gif" className="loading-gif" />
      </section>
    );
    return (
      <main className="app">
        <Header />
        <h2 className="error">{error}</h2>
        {isLoading && loading}
        <Route exact path="/login" render={() => <LoginForm />} />
        <Route exact path="/signup" render={() => <SignUpForm />} />
        <Route exact path="/" render={() => <MoviesDisplay />} />
        <Route path='/movies/:id' render={({ match }) => {
          const { id } = match.params;
          const movie = this.props.movies.find(movie => movie.movie_id === parseInt(id));
          console.log(movie)
          return movie && <MovieShowcase movie={movie} />
        }}
        />
        <Route exact path="/favorites" render={() => <Favorites />} />
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
