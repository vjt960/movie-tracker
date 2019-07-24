import React from 'react';
import { shallow } from 'enzyme';
import { MoviePoster } from './MoviePoster';

describe('MoviePoster', () => {
  let wrapper;
  let props;
  let mockEvent;
  let instance;

  beforeEach(() => {
    props = {
      user: { id: 1 },
      findMovie: jest.fn(),
      cancelFocus: jest.fn(),
      movie: { movie_id: 123, title: 'yeet', poster_path: 'path' }
    };
    mockEvent = {
      preventDefault: () => jest.fn(),
      target: {
        closest: () => ({ id: 1 })
      }
    };
    wrapper = shallow(<MoviePoster {...props} />);
    instance = wrapper.instance();
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to find movie on hover', () => {
    instance.setHover = jest.fn();
    wrapper.find('.poster-img').simulate('mouseEnter', mockEvent);
    expect(instance.setHover).toHaveBeenCalled();
  });

  it('should be able to cancel focus', () => {
    instance.cancelFocus = jest.fn();
    wrapper.find('.movie-poster').simulate('mouseLeave');
    expect(instance.cancelFocus).toHaveBeenCalled();
  });

  it('should only allow users to mark favorites', () => {
    instance.handleFavorite = jest.fn();
    wrapper.find('.favorite-icon').simulate('click');
    expect(instance.handleFavorite).toHaveBeenCalled();
  });
});
