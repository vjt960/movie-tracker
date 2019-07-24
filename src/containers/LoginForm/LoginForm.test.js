import React from 'react';
import { LoginForm, mapStateToProps, mapDispatchToProps } from './LoginForm';
import { signIn, hasErrored, clearError, loadFavorites } from '../../actions';
import { shallow } from 'enzyme';



describe('LoginForm', () => {
    let wrapper, instance;

    beforeEach(() => {
        wrapper = shallow(
        <LoginForm />);
        instance = wrapper.instance();
     
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should call handleChange on email input', () => {
        const mockEmailEvent = { target: {name: 'email', value: 'hashtagBlessed@mail.com'} }
        instance.handleChange = jest.fn();
        
        wrapper.find('[name="email"]').simulate('change', mockEmailEvent);
        expect(wrapper.state('email')).toEqual('hashtagBlessed@mail.com')
    });

    it('should call handleChange on password input', () => {
        const mockPasswordEvent = { target: {name: 'password', value: '2blessed2bstressed'} }
        instance.handleChange = jest.fn();
        
        wrapper.find('[name="password"]').simulate('change', mockPasswordEvent);
        expect(wrapper.state('password')).toEqual('2blessed2bstressed')
    });

    it('should set state when handleChange is called', () => {
        const mockeEvent = { target: { name: 'email', value: 'hashtagBlessed@mail.com'}};
        const expected = 'hashtagBlessed@mail.com';

        wrapper.instance().handleChange(mockeEvent)

        expect(wrapper.state('email')).toEqual(expected)
    });

    it('should call handleSubmit when submit button is clicked', () => {
        const mockEvent = { preventDefault: jest.fn() }
        instance.handleSubmit = jest.fn();

        wrapper.find('.login-btn').simulate('click', mockEvent);

        expect(instance.handleSubmit).toHaveBeenCalledWith(mockEvent);
    });

    it('should run handleEmail on received user data', () => {
        const mockEmail = 'hashtagBlessed@mail.com';
        instance.handleEmail = jest.fn();

        instance.handleEmail(mockEmail)

        expect(instance.handleEmail).toHaveBeenCalledWith(mockEmail)
    });

    it('should fetchUser when handleSubmit is called', () => {
        const mockEmail = 'hashtagBlessed@mail.com';
        const mockPassword = '2blessed2bstressed';

        instance.fetchUser = jest.fn();
        instance.fetchUser(mockEmail, mockPassword)

        expect(instance.fetchUser).toHaveBeenCalledWith(mockEmail, mockPassword)
    })

    it('should reset state when clearInputs is called', () => {
        const expected = {email: '', password: ''};

        instance.setState({ email: 'hashtagBlessed@mail.com' })
        instance.clearInputs();

        expect(wrapper.state()).toEqual(expected)
    });

    describe('mapStateToProps', () => {
        it('should return the object of the error message and current user', () => {
            const mockState = {
                user: {id: 1, name: 'Taylor', email: 'hashtagblessed@mail.com', password: '2blessed2bstressed'},
                favorites: [{title: 'Up'}, {title: 'Forgetting Sarah Marshall'}],
                movies: [{title: 'Star Wars'}, {title: 'Love Actually'}],
                focusedMovie: [{title: 'Avengers'}],
                isLoading: false,
                error: {error: 'error logging in user'}
            }
    
            const expected =  {
                user: {id: 1, name: 'Taylor', email: 'hashtagblessed@mail.com', password: '2blessed2bstressed'},
                error: {error: 'error logging in user'}
            }

            const mappedProps = mapStateToProps(mockState)

            expect(mappedProps).toEqual(expected)
        });
    })

    describe('mapDispatchToProps', () => {
        let mockDispatch;

        beforeEach(() => {
            mockDispatch = jest.fn();
        });
        it('should dispatch signIn when handleSubmit is called', () => {
            const actionToDispatch = hasErrored({error: {error: 'error logging in user'}})
            
            const mappedProps = mapDispatchToProps(mockDispatch);
            mappedProps.hasErrored({error: {error: 'error logging in user'}})

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        });

        it('should dispatch signIn when handleSubmit is called', () => {
            const actionToDispatch = signIn({user: {email: 'hashtagblessed@mail.com', password: '2blessed2bstressed'}})
            
            const mappedProps = mapDispatchToProps(mockDispatch);
            mappedProps.signIn({user: {email: 'hashtagblessed@mail.com', password: '2blessed2bstressed'}})

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        });

        it('should dispatch loadFavorites when handleSubmit is called', () => {
            const actionToDispatch = loadFavorites([{title: 'Back To The Future'}, {title: 'Adventures in Babysitting'}])
            
            const mappedProps = mapDispatchToProps(mockDispatch);  
            mappedProps.loadFavorites([{title: 'Back To The Future'}, {title: 'Adventures in Babysitting'}])

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        });

        it('should dispatch clearError when handleSubmit is called', () => {
            const actionToDispatch = clearError({error: ''})
            
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.clearError({error: ''})

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        });
    })
})