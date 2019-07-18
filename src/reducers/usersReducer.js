export const usersReducer = (state = [], {type, email, password}) => {
  switch(type) {
    case 'SIGN_IN':
      return null;

    default: 
      return state;
  }
}