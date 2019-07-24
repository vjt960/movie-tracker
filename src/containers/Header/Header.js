import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut, clearFavorites, clearError } from '../../actions';
import PropTypes from 'prop-types';

const Header = ({ user, signOut, clearFavorites }) => {
  const signInOut = user.loggedIn ? 'Sign-out' : 'Sign-in';
  const greeting = user.loggedIn ? `Hello, ${user.name}!` : '';

  const logoutUser = () => {
    signOut();
    clearFavorites();
  };

  return (
    <header>
      <h1>MOVIE-TRACKER</h1>
      <p className="header-greeting">{greeting}</p>
      <div className="header-btns-container">
        <NavLink
          exact
          to="/" 
          className="home-btn" 
          activeClassName="active">
          Home
        </NavLink>
        <NavLink 
          exact
          to="/favorites" 
          className="favorites-btn" 
          activeClassName="active">
          Favorites
        </NavLink>
        <NavLink
          exact
          to="/login"
          className="sign-in-btn"
          activeClassName="active"
          onClick={user.loggedIn ? logoutUser : null}
        >
          {signInOut}
        </NavLink>
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

Header.propTypes = {
  user: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired,
  clearFavorites: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
