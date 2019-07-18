export const userReducer = (state = {}, { type, user }) => {
  switch (type) {
    case 'SIGN_IN':
      return { ...user, loggedIn: true };

    case 'SIGN_OUT':
      return (state = {});

    case 'CREATE_ACCT':
      return {...user, id: Date.now()};


    default:
      return state;
  }
};
