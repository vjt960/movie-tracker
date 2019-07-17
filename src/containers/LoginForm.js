import React, { Component } from 'react';
import { connect } from 'react-redux';


class LoginForm extends Component {
  render() {
    return (
      <form className='login-form'>
        <input 
          type='text' 
          name='email' 
          className='login-input' 
          placeholder='E-Mail...'
        />
        <input 
          type='text' 
          name='email' 
          className='login-input' 
          placeholder='Password...' 
        />
        <button className='login-input login-btn'>Sign-In</button>
      </form>
    )
  }
}

export default LoginForm;
