import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewUser } from '../utilz/apiCalls';
import { NavLink } from 'react-router-dom';
// import { createAcct } from '../actions';
import { signIn } from '../actions';
import { fetchUser } from '../utilz/apiCalls';

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    // e.preventDefault();
    const { name, email, password } = this.state;
    const user = await postNewUser(name, email, password);
    this.props.createNewUser(user);
    this.clearInputs();
  };


    handleSubmit = async (e) => {
        // e.preventDefault();
        const { name, email, password } = this.state;
        await postNewUser(name, email, password)
        let newUser = await fetchUser(email, password)
        this.props.signIn(newUser);
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({name: '', email: '', password: ''})
    }

    render() {
        return (
        <form className='login-form'>
            <input 
                type='text'
                name='name'
                className='login-input'
                placeholder='Name...'
                onChange={this.handleChange}
                value={this.state.name}
                />
            <input 
                type='email' 
                name='email' 
                className='login-input' 
                placeholder='E-Mail...'
                onChange={this.handleChange}
                value={this.state.email}
                />
            <input 
                type='password' 
                name='password' 
                className='login-input' 
                placeholder='Password...' 
                onChange={this.handleChange}
                value={this.state.password}
                />
            <NavLink
                to='/'
                className='login-input login-btn'
                onClick={(e) => this.handleSubmit(e)}
                >
                Create Your Account
            </NavLink>
        </form>
        )
        
    }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
    signIn: (user) => dispatch(signIn(user))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
