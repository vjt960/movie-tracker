import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewUser } from '../../utilz/apiCalls';
import { signIn, hasErrored, clearError } from '../../actions';
import { fetchUser } from '../../utilz/apiCalls';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

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

  handleEmail = email => {
    return email
      .split('')
      .map(char => {
        if (char !== '@' && char !== '.') {
          return char.toLowerCase();
        } else {
          return char;
        }
      })
      .join('');
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { name, email, password } = this.state;
    const cleanEmail = this.handleEmail(email);
    try {
      await postNewUser(name, cleanEmail, password);
      let newUser = await fetchUser(cleanEmail, password);
      this.props.signIn(newUser);
      this.props.history.push('/');
      this.props.clearError();
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
  hasErrored: errorMessage => dispatch(hasErrored(errorMessage)),
  clearError: () => dispatch(clearError())
});

SignUpForm.propTypes = {
  user: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired,
  signIn: PropTypes.func.isRequired,
  hasErrored: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUpForm)
);
