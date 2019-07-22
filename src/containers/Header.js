import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut, clearFavorites, clearError } from '../actions';

const Header = props => {
  const signInOut = props.user.loggedIn ? 'Sign-out' : 'Sign-in';
  const greeting = props.user.loggedIn ? `Hello, ${props.user.name}!` : '';

  const logoutUser = () => {
    props.signOut();
    props.clearFavorites();
  };

  return (
    <header>
      <h1>MOVIE-TRACKER</h1>
      <p className="header-greeting">{greeting}</p>
      <div className="header-btns-container">
        <NavLink
          to="/login"
          className="sign-in-btn"
          activeClassName="active"
          onClick={props.user.loggedIn ? logoutUser : null}
        >
          {signInOut}
        </NavLink>
        <NavLink
          to="/"
          className="home-btn"
          activeClassName="active"
          onClick={() => props.clearError()}
        >
          Home
        </NavLink>
        <Link to="/favorites" className="favorites-btn">View Favorites</Link>
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
  clearFavorites: () => dispatch(clearFavorites()),
  clearError: () => dispatch(clearError())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
