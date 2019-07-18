export const userReducer = (state = {}, { type, user }) => {
  switch(type) {
    case 'SIGN_IN':
      return {...user, loggedIn: true};

    case 'SIGN_OUT':
      return state = {};

    default: 
      return state;
  }
}