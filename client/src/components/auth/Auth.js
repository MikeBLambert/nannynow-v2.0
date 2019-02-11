import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import styles from './Auth.scss';
import logo from '../../assets/nannyNowLogo.png';

export default class Auth extends Component {
  render() {
    const { pathname } = this.props.location;
    return (
      <main className={styles.Auth}>
        {pathname === '/signup' && <SignUp />}
        <section className="logo-container">
          <img className="logo" src={logo} />
        </section>
        {pathname === '/signin' && <SignIn />}
      </main>
    );
  }
}

const SignIn = () => {
  return (
    <section className="sign-in-container">
      <h1 className="sign-in-text">Sign In Now!</h1>
      <input className="input-form" placeholder="email" type="email" />
      <input className="input-form" placeholder="password" type="password" />
      <button className="sign-in-button">Sign In</button>
    </section>
  );
};

const SignUp = () => {
  return (
    <section className="sign-in-container">
      <h1 className="sign-in-text">Sign Up Now!</h1>
      <input className="input-form" placeholder="email" type="email" />
      <input className="input-form" placeholder="password" type="password" />
      <button className="sign-in-button">Sign Up</button>
    </section>
  );
};
