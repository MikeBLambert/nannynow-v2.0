export const SIGN_IN = 'SIGN_IN';

export const auth = (state = null, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case SIGN_IN:
      return payload;
    default:
      return state;
  }
};
