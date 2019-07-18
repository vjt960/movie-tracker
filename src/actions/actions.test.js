import * as actions from './index';

describe('actions', () => {
    it('should have a type of LOAD_MOVIES', () => {
        const movies = [
            {
                "vote_count": 27,
                "id": 315946,
                "video": false,
                "vote_average": 6.2,
                "title": "Passage of Venus",
                "popularity": 1.603,
                "poster_path": "\/9jtgJphKW836gISyzdUKWnZ6yrB.jpg",
                "original_language": "xx",
                "original_title": "Passage de Venus",
                "genre_ids": [
                    99
                ],
                "backdrop_path": null,
                "adult": false,
                "overview": "Photo sequence of the rare transit of Venus over the face of the Sun, one of the first chronophotographic sequences.",
                "release_date": "1874-12-09"
            }
        ]

        const expectedAction = {
            type: 'LOAD_MOVIES',
            movies: [
                {
                    "vote_count": 27,
                    "id": 315946,
                    "video": false,
                    "vote_average": 6.2,
                    "title": "Passage of Venus",
                    "popularity": 1.603,
                    "poster_path": "\/9jtgJphKW836gISyzdUKWnZ6yrB.jpg",
                    "original_language": "xx",
                    "original_title": "Passage de Venus",
                    "genre_ids": [
                        99
                    ],
                    "backdrop_path": null,
                    "adult": false,
                    "overview": "Photo sequence of the rare transit of Venus over the face of the Sun, one of the first chronophotographic sequences.",
                    "release_date": "1874-12-09"
                }
            ]
        }

        const result = actions.loadMovies(movies)

        expect(result).toEqual(expectedAction)

    });

    it('should have a type of SIGN_IN', () => {
        const user = {
            name: 'Arya',
            email: 'agirlhasnoemail@aol.com',
            password: 'IheartTheHound',
            id: 1000
        }

        const expectedAction = {
            type: 'SIGN_IN',
            user: {
                name: 'Arya',
                email: 'agirlhasnoemail@aol.com',
                password: 'IheartTheHound',
                id: 1000
            }
        }

        const result = actions.signIn(user)

        expect(result).toEqual(expectedAction)

    });

    it('should have a type of SIGN_OUT', () => {
        const expectedAction = {
            type: 'SIGN_OUT'
        }

        const result = actions.signOut()

        expect(result).toEqual(expectedAction)

    });

    it('should have a type of CREATE_ACCT', () => {

    });

    it('should have a type of ADD_FAVORITE', () => {

    });

    it('should have a type of VIEW_FAVORITES', () => {

    })
})