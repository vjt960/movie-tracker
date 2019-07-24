import React from 'react';
import { shallow } from 'enzyme';
import { Favorites } from './Favorites';

describe('Favorites', () => {
  it('should match snapshot', () => {
    const props = { favorites: [{ movie_id: 1 }] };
    const wrapper = shallow(<Favorites {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
