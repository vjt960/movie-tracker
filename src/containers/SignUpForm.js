import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewUser } from '../utilz/apiCalls';
import { signIn, hasErrored } from '../actions';
import { fetchUser } from '../utilz/apiCalls';
import { withRouter } from 'react-router-dom';

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
    e.preventDefault();
    const { name, email, password } = this.state;
    try {
      await postNewUser(name, email, password);
      let newUser = await fetchUser(email, password);
      this.props.signIn(newUser);
      this.props.history.push('/');
      this.props.hasErrored('');
    } catch ({ message }) {
      this.props.hasErrored(message);
      this.props.history.push('/signup');
    }
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    return (
      <form className="login-form">
        <legend className="error">{this.props.error}</legend>
        <input
          type="text"
          name="name"
          className="login-input"
          placeholder="Name..."
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          type="email"
          name="email"
          className="login-input"
          placeholder="E-Mail..."
          onChange={this.handleChange}
          value={this.state.email}
        />
        <input
          type="password"
          name="password"
          className="login-input"
          placeholder="Password..."
          onChange={this.handleChange}
          value={this.state.password}
        />
        <button
          className="login-input login-btn"
          onClick={e => this.handleSubmit(e)}
        >
          Create Your Account
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  signIn: user => dispatch(signIn(user)),
  hasErrored: errorMessage => dispatch(hasErrored(errorMessage))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUpForm)
);
