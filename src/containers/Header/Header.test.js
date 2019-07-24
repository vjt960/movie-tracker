import React from 'react';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import { shallow } from 'enzyme';
import { signOut, clearFavorites } from '../../actions';

describe('Header', () => {
  let wrapper, instance, user, mockSignOut, mockClearFavorites;

  beforeEach(() => {
    user = {
      name: 'Taylor',
      loggedIn: true
    };
    mockSignOut = jest.fn();
    mockClearFavorites = jest.fn();
    wrapper = shallow(
      <Header
        user={user}
        signOut={mockSignOut}
        clearFavorites={mockClearFavorites}
      />
    );
    instance = wrapper.instance();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return the object of logged in user', () => {
      const mockState = {
        user: {
          id: 1,
          name: 'Taylor',
          email: 'hashtagblessed@mail.com',
          password: '2blessed2bstressed'
        },
        favorites: [{ title: 'Up' }, { title: 'Forgetting Sarah Marshall' }],
        movies: [{ title: 'Star Wars' }, { title: 'Love Actually' }],
        focusedMovie: [{ title: 'Avengers' }],
        isLoading: false,
        error: { error: 'error creating account' }
      };

      const expected = {
        user: {
          id: 1,
          name: 'Taylor',
          email: 'hashtagblessed@mail.com',
          password: '2blessed2bstressed'
        }
      };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    let mockDispatch;

    beforeEach(() => {
      mockDispatch = jest.fn();
    });
    it('should call dispatch with signOut when logoutUser is called', () => {
      const actionToDispatch = signOut();

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.signOut();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with clearFavorites when logoutUser is called', () => {
      const actionToDispatch = clearFavorites();

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.clearFavorites();

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
