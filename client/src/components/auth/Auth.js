import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Auth.scss';

export default class Auth extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <section className={styles.Auth}>
        <h1>Nanny Now</h1>
        <input className="input-form" placeholder="email" type="email" />
        <input className="input-form" placeholder="password" type="password" />
      </section>
    );
  }
}
