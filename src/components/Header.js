import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>MOVIE-TRACKER</h1>
      <div className='header-btns-container'>
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
      </div>
    </header>
  )
}

export default Header;
