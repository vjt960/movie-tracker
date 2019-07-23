import React from 'react';
import { LoginForm } from './LoginForm';
import { shallow } from 'enzyme';

describe('LoginForm', () => {
    let wrapper, instance;
    let mockHandleChange = jest.fn();
    let mockHandleEmail = jest.fn();
    let mockHandleSubmit = jest.fn();
    beforeEach(() => {
        wrapper = shallow(
        <LoginForm 
            handleChange={mockHandleChange}
            handleEmail={mockHandleEmail}
            handleSubmit={mockHandleSubmit}
        />);
        instance = wrapper.instance();
     
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should call handleChange on input', () => {
        wrapper.find('#login').simulate('keyup');
        expect(wrapper.state('email')).toEqual('')
    });

    it('should set state when handleChange is called', () => {
        wrapper.instance().setState({ email: 'email'})

        expect(wrapper.state('email')).toEqual('email')
    });

    it('should call handleSubmit when submit button is clicked', () => {
        wrapper.find('.login-btn').simulate('click');

        expect(instance.handleSubmit).toHaveBeenCalled();

    });

    it('should reset state when submit button is clicked', () => {
        wrapper.find('.login-btn').simulate('click');

        expect(wrapper.state('email')).toEqual('')
    })
})