import { loadingReducer } from './loadingReducer';

describe('loadingReducer', () => {
  it('should return initial state', () => {
    const expected = true;

    const result = loadingReducer(undefined, true);

    expect(result).toEqual(expected);
  });

  it('should return false if action is complete', () => {
    const state = true;

    const action = {
      type: 'LOAD_COMPLETE'
    };

    const expected = false;

    const result = loadingReducer(state, action);

    expect(result).toEqual(expected);
  });
});
