export const userReducer = (state = {}, { type, user }) => {
  switch(type) {
    case 'SIGN_IN':
      return user;

    default: 
      return state;
  }
}