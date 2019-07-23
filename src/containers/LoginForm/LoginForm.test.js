import React from 'react';
import { LoginForm } from './LoginForm';
import { shallow } from 'enzyme';
import { handleChange, handleEmail, handleSubmit } from './LoginForm'

describe('LoginForm', () => {
    let wrapper, instance;
    // let mockHandleChange = jest.fn();
    // let mockHandleEmail = jest.fn();
    // let mockHandleSubmit = jest.fn();
    beforeEach(() => {
        wrapper = shallow(
        <LoginForm 
            // handleChange={mockHandleChange}
            // handleEmail={mockHandleEmail}
            // handleSubmit={mockHandleSubmit}
        />);
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

    })
})