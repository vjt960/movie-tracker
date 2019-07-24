import React from 'react';
import { shallow } from 'enzyme';
import { SignUpForm, mapStateToProps, mapDispatchToProps } from './SignUpForm';
import { signIn, hasErrored, clearError } from '../../actions';

describe('SignUpForm', () => {
    let wrapper, instance;

    beforeEach(() => {
        wrapper = shallow(<SignUpForm />)
        instance = wrapper.instance()
    })

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should update state when a change in email input is detected', () => {
        const mockEvent = { target: {name: 'email', value: 'hashtagBlessed@mail.com'} }
        instance.handleChange = jest.fn();

        wrapper.find('[name="email"]').simulate('change', mockEvent)

        expect(wrapper.state('email')).toEqual('hashtagBlessed@mail.com') 
    });

    it('should update state when a change in name input is detected', () => {
        const mockEvent = { target: {name: 'name', value: 'Taylor'} }
        instance.handleChange = jest.fn();

        wrapper.find('[name="name"]').simulate('change', mockEvent)

        expect(wrapper.state('name')).toEqual('Taylor') 
    });

    it('should update state when a change in password input is detected', () => {
        const mockEvent = { target: {name: 'password', value: '2blessed2bstressed'} }
        instance.handleChange = jest.fn();

        wrapper.find('[name="password"]').simulate('change', mockEvent)

        expect(wrapper.state('password')).toEqual('2blessed2bstressed') 
    });

    it('should run handleEmail on received user data', () => {
        const mockEmail = 'hashtagBlessed@mail.com';
        instance.handleEmail = jest.fn();

        instance.handleEmail(mockEmail)

        expect(instance.handleEmail).toHaveBeenCalledWith(mockEmail)
    });

    it('should call handleSubmit when submit button is clicked', () => {
        const mockEvent = { preventDefault: jest.fn() }
        instance.handleSubmit = jest.fn();

        wrapper.find('.login-btn').simulate('click', mockEvent);

        expect(instance.handleSubmit).toHaveBeenCalledWith(mockEvent);
    });

    it.skip('should navigate to home page when user successfully logs in', () => {
        const historyMock = { push: jest.fn() };
        const mockEvent = { preventDefault: jest.fn() }
        // const wrapper = shallow(<SignUpForm history={historyMock}/>)
        instance.handleSubmit(mockEvent)
        instance.props.historyMock('/')

        expect(historyMock.mock.calls.push[0]).toEqual('/')
    })

    it('should reset state when clearInputs is called', () => {
        const expected = {name: '', email: '', password: ''}
        instance.setState({ name: 'Shiva', email: 'hashtagBlessed@mail.com', password: '2blessed2bstressed'})

        instance.clearInputs();

        expect(wrapper.state()).toEqual(expected)
    });

    describe('mapStateToProps', () => {
        it('should return the object of the current user and error message', () => {
            const mockState = {
                user: {id: 1, name: 'Taylor', email: 'hashtagblessed@mail.com', password: '2blessed2bstressed'},
                favorites: [{title: 'Up'}, {title: 'Forgetting Sarah Marshall'}],
                movies: [{title: 'Star Wars'}, {title: 'Love Actually'}],
                focusedMovie: [{title: 'Avengers'}],
                isLoading: false,
                error: {error: 'error creating account'}
            }

            const expected = {
                user: {id: 1, name: 'Taylor', email: 'hashtagblessed@mail.com', password: '2blessed2bstressed'},
                error: {error: 'error creating account'}
            }

            const mappedProps = mapStateToProps(mockState)

            expect(mappedProps).toEqual(expected)
        })
    })

    describe('mapDispatchToProps', () => {
        let mockDispatch;

        beforeEach(() => {
            mockDispatch = jest.fn();
        })
        it('should call dispatch with signIn when handleSubmit is called', () => {
            const actionToDispatch = signIn({id: 1, name: 'Taylor', email: 'hashtagblessed@mail.com', password: '2blessed2bstressed'})

            const mappedProps = mapDispatchToProps(mockDispatch);
            mappedProps.signIn({id: 1, name: 'Taylor', email: 'hashtagblessed@mail.com', password: '2blessed2bstressed'})

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
        });

        it('should call dispatch with hasErrored when handleSubmit is called', () => {
            const actionToDispatch = hasErrored({error: 'error creating account'});

            const mappedProps = mapDispatchToProps(mockDispatch);
            mappedProps.hasErrored({error: 'error creating account'});

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
        });

        it('should call dispatch with clearError when handleSubmit is called', () => {
            const actionToDispatch = clearError({error: ''})

            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.clearError({error: ''})

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        })
    })
})