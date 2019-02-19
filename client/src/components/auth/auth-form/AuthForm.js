import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthForm.scss';

const AuthForm = props => {
  const {
    email,
    password,
    role,
    handleChange,
    handleRoleChange,
    handleSubmit,
    titleText,
    buttonText,
  } = props;

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
      {buttonText === 'Sign Up' && <RoleSelect role={role} handleRoleChange={handleRoleChange} />}
      <button className="sign-in-button">{buttonText}</button>
    </form>
  );
};

AuthForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleRoleChange: PropTypes.func,
  titleText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  role: PropTypes.string,
};

const RoleSelect = props => {
  const { role, handleRoleChange } = props;
  return (
    <div className="role-select">
      <label className="select-label">Are you a Nanny or a Family?</label>
      <select className="input-form" onChange={handleRoleChange}>
        <option value="">Select</option>
        <option name={role} key="nanny" value="nanny">
          Nanny
        </option>
        <option name={role} key="family" value="family">
          Family
        </option>
      </select>
    </div>
  );
};

RoleSelect.propTypes = {
  role: PropTypes.string.isRequired,
  handleRoleChange: PropTypes.func.isRequired
};

export default AuthForm;
