import React from 'react';
import { shallow } from 'enzyme';
import movieDetailsDisplay from './movieDetailsDisplay';

describe('movieDetailsDisplay', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<movieDetailsDisplay />);
    expect(wrapper).toMatchSnapshot();
  });
});
