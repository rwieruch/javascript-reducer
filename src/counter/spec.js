import { expect } from 'chai';

import counterReducer from './';

describe('person reducer', () => {
  it('increases the counter (given same input we can always expect same output)', () => {
    expect(counterReducer(0, { type: 'INCREASE' })).to.equal(1);
    expect(counterReducer(0, { type: 'INCREASE' })).to.equal(1);
  });

  it('decreases the counter', () => {
    expect(counterReducer(0, { type: 'DECREASE' })).to.equal(-1);
  });

  it('handles unmatching state transitions', () => {
    expect(counterReducer(0, { type: 'UNMATCHING_ACTION' })).to.equal(
      0,
    );
  });
});
