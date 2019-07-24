import React from 'react';
import { shallow } from 'enzyme';
// import { fetchMovieData } from './apiCalls';
// import { loadMovies, endLoading, hasErrored } from '../../actions'
import { App } from './App';

// jest.mock('./apiCalls', () => ({
//     fetchMovieData: jest.fn().mockImplementation(() => {
//         return [
//             {id: 1, title: 'the little mermaid', description:'young girl gives up her voice to be with a man'}, 
//             {id: 2, title: 'beauty and the beast', description: 'young girl gets kidnapped by a beast to save her father and succumbs to Stockholm syndrome'}
//         ]
//     })
// }));

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });

    it.skip('should call fetchMovieData in componentDidMount', () => {
        wrapper.instance().componentDidMount();

        expect(wrapper.fetchMovieData).toHaveBeenCalled();
    });

})