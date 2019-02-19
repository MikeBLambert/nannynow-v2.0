export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const SESSION_TOKEN = 'SESSION_TOKEN';
export const SESSION_CREATE = 'SESSION_CREATE';
export const LOAD_START = 'LOAD_START';
export const LOAD_END = 'LOAD_END';
export const SESSION_ERROR = 'SESSION_ERROR';

export const session = (state = null, { type, payload }) => {
  switch (type) {
    case SIGN_IN:
      return payload;
    case SIGN_UP:
      return payload;
    default:
      return state;
  }
};
