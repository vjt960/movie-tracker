import React, { Component } from 'react';
import { loadMovies } from '../actions';
import { fetchData } from '../utilz/apiCalls';
import { connect } from 'react-redux';
// import '../App.css';

class App extends Component {
componentDidMount = async () => {
  const { handleFetch } = this.props;
  fetchData()
  .then(data => handleFetch(data.results))
}

  render() {
    return (
      <h1>Yo World</h1>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  handleFetch: movies => dispatch(loadMovies(movies))
})

export default connect(null, mapDispatchToProps)(App);
