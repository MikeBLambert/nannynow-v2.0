import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthForm.scss';

const AuthForm = props => {
  const { email, password, handleChange, handleSubmit, titleText, buttonText } = props;

  return (
    <form onSubmit={handleSubmit} className={styles.AuthForm}>
      <h1 className="sign-in-text">{titleText}</h1>
      <input
        className="input-form"
        placeholder="email"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <input
        className="input-form"
        placeholder="password"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <button className="sign-in-button">{buttonText}</button>
    </form>
  );
};

AuthForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  titleText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
export default AuthForm;
