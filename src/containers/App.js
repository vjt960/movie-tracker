import React, { Component } from 'react';
import { loadMovies } from '../actions';
import { fetchData } from '../utilz/apiCalls';
import { connect } from 'react-redux';
import MoviesDisplay from './MoviesDisplay';
// import '../App.css';

class App extends Component {
constructor(props) {
  super()

}
componentDidMount = async () => {
  const { handleFetch } = this.props;
  fetchData()
  .then(data => data)
  .then(movies => handleFetch(movies))
}

  render() {
    return (
      <main>
        {
          (this.props.movies.length) && 
        <MoviesDisplay />
        }
      </main>
    );
  }
}

export const mapStateToProps = state => {
  return { movies:  state.movies }
}

export const mapDispatchToProps = dispatch => ({
  handleFetch: movies => dispatch(loadMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
