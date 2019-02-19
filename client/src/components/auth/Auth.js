import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './Auth.scss';
import logo from '../../assets/nannyNowLogo.png';
import { signUp, signIn } from './actions';
import AuthForm from './auth-form/AuthForm';

class Auth extends Component {
  static propTypes = {
    signUp: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
    role: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleRoleChange = ({ target }) => {
    this.setState({ role: target.value });
  };

  handleSignUp = event => {
    event.preventDefault();
    const { email, password, role } = this.state;
    const { signUp } = this.props;
    signUp({ email, password, role });
  };

  handleSignIn = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { signIn } = this.props;
    signIn({ email, password });
  };

  render() {
    const { pathname } = this.props.location;
    const { email, password, role } = this.state;
    return (
      <main className={styles.Auth}>
        {pathname === '/signup' && (
          <AuthForm
            titleText="Sign Up Now!"
            buttonText="Sign Up"
            email={email}
            password={password}
            handleChange={this.handleChange}
            handleRoleChange={this.handleRoleChange}
            handleSubmit={this.handleSignUp}
            role={role}
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
            handleSubmit={this.handleSignIn}
          />
        )}
      </main>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    signUp: ({ email, password, role }) => dispatch(signUp({ email, password, role })),
    signIn: ({ email, password }) => dispatch(signIn({ email, password })),
  }),
)(Auth);
