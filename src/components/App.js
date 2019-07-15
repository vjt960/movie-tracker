import React, { Component } from 'react';
import { fetchMovieData } from '../utilz/apiCalls';
// import '../App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movieData: []
    };
  }

componentDidMount() {
  fetchMovieData()
  .then(data => this.setState()
  
}

  render() {
    return (
      <h1>Yo World</h1>
    );
  }
}

export default App;
