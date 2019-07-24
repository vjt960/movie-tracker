import { userReducer, errorReducer } from './userReducer';

describe('userReducer', () => {
    it('should return initial state', () => {
        const expected = {};

        const result = userReducer(undefined, {});

        expect(result).toEqual(expected)

    });

    it('should update the user with SIGN_IN', () => {
        const state = {}

        const user = {
            user: {
            email: 'hashtagBlessed@mail.com',
            password: '2blessed2bstressed'
        }};

        const action = {
            type: 'SIGN_IN',
            user
        };

        const expected = {
            user: {
                email: 'hashtagBlessed@mail.com',
                password: '2blessed2bstressed'
        }};

        const result = userReducer(state, action);

        expect(result).toEqual({...expected, loggedIn: true});
    });

    it('should update the user with CREATE_ACCT', () => {
        const state = {};

        const user = {
            user: {
                name: 'Taylor',
                email: 'hashtagBlessed@mail.com',
                password: '2blessed2bstressed'
            }
        }

        Date.now = jest.fn()

        const action = {
            type: 'CREATE_ACCT', 
            user
        };

        const expected = {
            user: {
                name: 'Taylor',
                email: 'hashtagBlessed@mail.com',
                password: '2blessed2bstressed'
        }};

        const result = userReducer(state, action)

        expect(result).toEqual({...expected, id: Date.now()})

    });

    it('should return the user to default with SIGN_OUT', () => {
        const state = {
            user: {
                name: 'Taylor',
                email: 'hashtagBlessed@mail.com',
                password: '2blessed2bstressed'
        }}

        const action = {
            type: 'SIGN_OUT'
        }

        const expected = {}

        const result = userReducer(state, action)

        expect(result).toEqual(expected)

    });

    describe('errorReducer', () => {
        it('should return inital state', () => {
            const expected = '';

            const result = errorReducer(undefined, '');

            expect(result).toEqual(expected);
        });

        it('should return an error with HAS_ERRORED', () => {
            const state = {error: ''};

            const errorMessage = {error: 'Error'};

            const action = {
                type: 'HAS_ERRORED',
                errorMessage
            };

            const expected = { error: 'Error' };

            const result = errorReducer(state, action);

            expect(result).toEqual(expected);
        });

        it('should clear error state with CLEAR_ERROR', () => {
            const state = { error: 'Error'} ;

            const action = {
                type: 'CLEAR_ERROR'
            };

            const expected = '';

            const result = errorReducer(state, action);

            expect(result).toEqual(expected);
        });
    })
})