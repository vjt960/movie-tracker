import React from 'react';
import { connect } from 'react-redux'
import { addNewFavorite } from '../utilz/apiCalls'
import { addFavorite, viewFavorites, deleteFavorite } from '../actions'
import activeFavIcon from '../images/001-heart.svg'
import { statements } from '@babel/template';
import { compose } from '../../../../../Library/Caches/typescript/3.4.3/node_modules/redux';
// import inactiveFavIcon from '../images/002-heart-1.svg'

// const MoviePoster = ({title, overview, releaseDate, vote_average, posterPath, id, setHover, cancelHover, addFavorite }) => {
// }

class MoviePoster extends React.Component {
  constructor() {
    super();
    this.state = {
      isFavorited: false,
      currentHover: false
    }
  }
  
  handleFavorite = async (e) => {
    e.preventDefault();
    const findMovie = this.props.movies[0].find(movie => movie.id === parseInt(e.target.id))
    console.log('1', findMovie)
    const newFave = await addNewFavorite(findMovie)
    // this.props.addFavorite(n)
    console.log('2', newFave)
    this.setState({isFavorited: !this.state.isFavorited})
    
  }
  
  render() {
    const { posterPath, title, id } = this.props;
    return(
      <article className='movie-poster' id={id}>
        <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={`${title}-poster`} className='poster-img' />

        <p className='poster-title'>{title}</p>
        <img src={activeFavIcon} onClick={e => this.handleFavorite(e)} className='favorite-icon' alt='favorite-icon' id={id}/>
      </article>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.id,
  movies: state.movies
})

const mapDispatchToProps = dispatch => ({
  addFavorite: fave => dispatch(addFavorite(fave)),
  viewFavorites: allFaves => dispatch(viewFavorites(allFaves)),
  deleteFavorite: id => dispatch(deleteFavorite(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviePoster);