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

    it.skip('should return a lowercase string when handleEmail is called', () => {
        // const mockEmail = 'HaShTagBlEsSeD@mail.com';
        // const expected = 'hashtagblessed@mail.com'
        instance.handleSubmit = jest.fn();
        instance.handleEmail = jest.fn();
        // const result = instance.handleEmail(mockEmail)

        instance.handleSubmit();

        expect(instance.handleEmail).toHaveBeenCalled();

        
    });

    it('should reset state when clearInputs is called', () => {
        const expected = {name: '', email: '', password: ''}
        instance.setState({ name: 'Shiva', email: 'hashtagBlessed@mail.com', password: '2blessed2bstressed'})

        instance.clearInputs();

        expect(wrapper.state()).toEqual(expected)
    })

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
        it('should call dispatch with signIn when the submit button is clicked', () => {
            const mockDispatch = jest.fn();
            const actionToDispatch = signIn({id: 1, name: 'Taylor', email: 'hashtagblessed@mail.com', password: '2blessed2bstressed'})

            const mappedProps = mapDispatchToProps(mockDispatch);
            mappedProps.signIn({id: 1, name: 'Taylor', email: 'hashtagblessed@mail.com', password: '2blessed2bstressed'})

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        })
    })
})