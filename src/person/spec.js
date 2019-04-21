import { expect } from 'chai';

import personReducer from './';

describe('person reducer', () => {
  it('changes the lastname', () => {
    const initialState = {
      firstname: 'Liesa',
      lastname: 'Huppertz',
      age: 30,
    };

    const action = {
      type: 'CHANGE_LASTNAME',
      lastname: 'Wieruch',
    };

    const result = personReducer(initialState, action);

    expect(result).to.eql({
      firstname: 'Liesa',
      lastname: 'Wieruch',
      age: 30,
    });
  });

  it('changes the age', () => {
    const initialState = {
      firstname: 'Liesa',
      lastname: 'Huppertz',
      age: 30,
    };

    const action = {
      type: 'INCREASE_AGE',
    };

    const result = personReducer(initialState, action);

    expect(result).to.eql({
      firstname: 'Liesa',
      lastname: 'Huppertz',
      age: 31,
    });
  });
});
