import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../actions';

const Header = props => {
  const signInOut = props.user.loggedIn ? 'Sign-out' : 'Sign-in';
  return (
    <header>
      <h1>MOVIE-TRACKER</h1>
      <div className="header-btns-container">
        <NavLink
          to="/login"
          className="sign-in-btn"
          activeClassName="active"
          onClick={props.user.loggedIn ? props.signOutUser : null}
        >
          {signInOut}
        </NavLink>
        <NavLink to="/" className="home-btn" activeClassName="active">
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
  signOutUser: () => dispatch(signOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
