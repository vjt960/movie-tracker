import React from 'react';
import { shallow } from 'enzyme';
import { FavoritePoster } from './FavoritePoster';

describe('FavoritePoster', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      user: { id: 1 },
      loadFavorites: jest.fn(),
      movie: { movie_id: 123, title: 'yeet', poster_path: 'path' }
    };

    wrapper = shallow(<FavoritePoster {...props} />, {
      disableLifecycleMethods: true
    });
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
