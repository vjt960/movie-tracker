export const loadMovies = movies => ({
    type: 'LOAD_MOVIES',
    movies
});

export const signIn = (email, password) => ({
    type: "SIGN_IN",
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

});

export const viewFavorites = () => ({


});

export const deleteFavorite = () => ({

});
