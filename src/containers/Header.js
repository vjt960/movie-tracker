import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut, clearError } from '../actions';

const Header = props => {
  const signInOut = props.user.loggedIn ? 'Sign-out' : 'Sign-in';
  const greeting = props.user.loggedIn ? `Hello, ${props.user.name}!` : '';
  return (
    <header>
      <h1>MOVIE-TRACKER</h1>
      <p className="header-greeting">{greeting}</p>
      <div className="header-btns-container">
        <NavLink
          to="/login"
          className="sign-in-btn"
          activeClassName="active"
          onClick={props.user.loggedIn ? props.signOutUser : null}
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
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  signOutUser: () => dispatch(signOut()),
  clearError: () => dispatch(clearError())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
