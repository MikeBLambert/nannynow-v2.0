import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Auth.scss';
import logo from '../../assets/nannyNowLogo.png';

export default class Auth extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <main className={styles.Auth}>
        <section className="logo-container">
          <img className="logo" src={logo} />
        </section>
        <h1 className="sign-in-text">Sign In Now!</h1>
        <input className="input-form" placeholder="email" type="email" />
        <input className="input-form" placeholder="password" type="password" />
        <button className="sign-in-button">Sign In</button>
      </main>
    );
  }
}
