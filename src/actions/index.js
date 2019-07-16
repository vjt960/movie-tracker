export const signIn = (email, password) => ({
    type: 'SIGN_IN',
    email,
    password
});

export const createAcct = (name, email, password) => ({
    type: 'CREATE_ACCT', 
    name,
    email,
    password

});

export const addFavorite = () => ({
    type: 'ADD_FAVORITE'

});

export const viewFavorites = () => ({
    type: 'VIEW_FAVORITES'

});

export const deleteFavorite = () => ({

});
