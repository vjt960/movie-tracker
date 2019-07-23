import React from 'react';
import { shallow } from 'enzyme';
import { fetchMovieData } from '../utilz/apiCalls';
import { loadMovies, endLoading, hasErrored } from '../actions'
import { App } from './App';

describe('App', () => {
    let wrapper;
    let mockMovieData;

    beforeEach(() => {
        wrapper = shallow(<App />);
        mockMovieData = [
            {id: 1, title: 'the little mermaid', description:'young girl gives up her voice to be with a man'}, 
            {id: 2, title: 'beauty and the beast', description: 'young girl gets kidnapped by a beast to save her father and succumbs to Stockholm syndrome'}
        ]

        window.fetch = jest.fn().mockImplementation(() => {
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockMovieData)
            })
        })
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });

    it('should call fetchMovieData in componentDidMount', () => {
        wrapper.instance().componentDidMount()
        fetchMovieData()

        expect(window.fetch).toEqual(mockMovieData);
    })
})