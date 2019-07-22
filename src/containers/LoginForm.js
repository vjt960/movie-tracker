import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser, fetchFavorites } from '../utilz/apiCalls';
import { signIn, hasErrored, clearError, loadFavorites } from '../actions';
import { withRouter } from 'react-router-dom';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = e => {
    e.preventDefault();
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
    const { email, password } = this.state;
    try {
      let user = await fetchUser(this.handleEmail(email), password);
      this.props.signIn(user);
      let favorites = await fetchFavorites(user.id);
      this.props.loadFavorites(favorites);
      this.props.history.push('/');
      this.props.clearError();
    } catch ({ message }) {
      this.props.hasErrored(message);
      this.props.history.push('/login');
      this.clearInputs();
    }
  };

  clearInputs = () => {
    this.setState({ email: '', password: '' });
  };

  render() {
    return (
      <form className="login-form">
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
          Sign-In
        </button>
        <NavLink to="/signup" className="login-create-acct-btn">
          <p className="login-create-acct">
            Don't have an account? Create one now!
          </p>
        </NavLink>
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
  clearError: () => dispatch(clearError()),
  loadFavorites: movies => dispatch(loadFavorites(movies))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm)
);
