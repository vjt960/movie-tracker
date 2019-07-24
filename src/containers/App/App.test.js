import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { loadMovies } from '../../actions';

jest.mock('../../utilz/apiCalls', () => ({
  fetchMovieData: jest.fn().mockImplementation(() => {
    return [{ title: 'movie_1' }, { title: 'movie_2' }];
  })
}));

describe('App', () => {
  describe('App Component', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        loadMovies: jest.fn(),
        endLoading: jest.fn(),
        hasErrored: jest.fn(),
        isLoading: false,
        error: ''
      };
      wrapper = shallow(<App {...props} />, { disableLifecycleMethods: true });
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with the movies array', () => {
      const mockState = {
        movies: [{ title: 'Shrek' }],
        isLoading: false,
        error: '',
        favorites: [],
        setHover: null,
        focusedMovie: { title: 'SpiderPig' }
      };
      const expected = {
        movies: [{ title: 'Shrek' }],
        isLoading: false,
        error: '',
        favorites: []
      };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with movies when loadMovies is called', () => {
      const mockMovies = [{ title: 'movie_1' }];
      const mockDispatch = jest.fn();
      const actionToDispatch = loadMovies(mockMovies);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadMovies(mockMovies);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
