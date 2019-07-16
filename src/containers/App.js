import React, { Component } from 'react';
import { loadMovies } from '../actions';
// import '../App.css';

class App extends Component {
componentDidMount = async () => {
  const { handleFetch } = this.props;
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

export default App;
