export const userReducer = (state = {}, { type, user }) => {
  switch (type) {
    case 'SIGN_IN':
      return { ...user, loggedIn: true };

    case 'SIGN_OUT':
      return (state = {});

    case 'CREATE_ACCT':
      return { ...user, id: Date.now() };

    default:
      return state;
  }
};

export const errorReducer = (state = '', action) => {
  switch (action.type) {
    case 'HAS_ERRORED':
      return action.errorMessage;
    case 'CLEAR_ERROR':
      return '';
    default:
      return state;
  }
};
