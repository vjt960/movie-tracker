import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import LoginForm from '../containers/LoginForm';

const Header = () => {
  return (
    <header>
      <h1>MOVIE-TRACKER</h1>
      <NavLink
          to='/login'
          className='sign-in-btn'
          activeClassName='active'
      >
        Sign-In
      </NavLink>
      <NavLink
          to='/'
          className='home-btn'
          activeClassName='active'
      >
        Home
      </NavLink>
    </header>
  )
}

export default Header;
