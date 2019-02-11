import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './Auth.scss';
import logo from '../../assets/nannyNowLogo.png';
import { signIn } from './actions';
import AuthForm from './auth-form/AuthForm';

class Auth extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { onSubmit } = this.props;
    onSubmit({ email, password });
  };

  render() {
    const { pathname } = this.props.location;
    const { email, password } = this.state;
    return (
      <main className={styles.Auth}>
        {pathname === '/signup' && (
          <AuthForm
            titleText="Sign Up Now!"
            buttonText="Sign Up"
            email={email}
            password={password}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )}
        <section className="logo-container">
          <img className="logo" src={logo} />
        </section>
        {pathname === '/signin' && (
          <AuthForm
            titleText="Sign In Now!"
            buttonText="Sign In"
            email={email}
            password={password}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )}
      </main>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    onSubmit: ({ email, password }) => dispatch(signIn({ email, password })),
  }),
)(Auth);
