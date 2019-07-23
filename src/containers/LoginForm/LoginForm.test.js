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

    it('should call handleChange on input', () => {
        const mockEmailEvent = { target: {name: 'email', value: 'hashtagBlessed@mail.com'} }
        instance.handleChange = jest.fn();
        
        wrapper.find('[name="email"]').simulate('change', mockEmailEvent);
        expect(wrapper.state('email')).toEqual('hashtagBlessed@mail.com')
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

    it('should reset state when clearInputs is called', () => {
        const expected = {email: '', password: ''};

        instance.setState({ email: 'hashtagBlessed@mail.com' })
        instance.clearInputs();

        expect(wrapper.state()).toEqual(expected)
    });

    describe('mapStateToProps', () => {
        it('should return the object of the current user', () => {
            const mockState = {
                user: {id: 1, name: 'Taylor', email: 'hashtagblessed@mail.com', password: '2blessed2bstressed'},
                favorites: [{title: 'Up'}, {title: 'Forgetting Sarah Marshall'}],
                movies: [{title: 'Star Wars'}, {title: 'Love Actually'}],
                focusedMovie: [{title: 'Avengers'}],
                isLoading: false
            }
    
            const expected =  {
                user: {id: 1, name: 'Taylor', email: 'hashtagblessed@mail.com', password: '2blessed2bstressed'}
            }

            const mappedProps = mapStateToProps(mockState)

            expect(mappedProps).toEqual(expected)
        });
    })

    describe('mapDispatchToProps', () => {
        it('should dispatch signIn when submit is clicked', () => {
            const mockDispatch = jest.fn();
            const actionToDispatch = signIn({user: {email: 'hashtagblessed@mail.com', password: '2blessed2bstressed'}})

            const mappedProps = mapDispatchToProps(mockDispatch);
            mappedProps.signIn({user: {email: 'hashtagblessed@mail.com', password: '2blessed2bstressed'}})

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        })
    })
})