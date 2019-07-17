import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
import { fetchUser } from '../utilz/apiCalls';


class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name] : e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state
    fetchUser(email, password)
  }

  render() {
    return (
      <form className='login-form'>
        <input 
          type='text' 
          name='email' 
          className='login-input' 
          placeholder='E-Mail...'
          onChange={this.handleChange}
          value={this.state.email}
        />
        <input 
          type='text' 
          name='password' 
          className='login-input' 
          placeholder='Password...' 
          onChange={this.handleChange}
          value={this.state.password}
        />
        <button 
          className='login-input login-btn'
          onClick={(e) => this.handleSubmit(e)}
        >
          Sign-In
        </button>
        <NavLink
          to='/signup'
          className='login-create-acct-btn'
        >
          <p className='login-create-acct'>
            Don't have an account?  Create one now!
          </p>
        </NavLink>
      </form>
    )
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   handleSubmit: (email, password) => dispatch()
// })

export default LoginForm;
