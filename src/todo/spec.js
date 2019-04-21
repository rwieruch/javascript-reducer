import { expect } from 'chai';

import todoReducer from './';

describe('todo reducer', () => {
  it('completes a todo', () => {
    const initialState = [
      {
        id: '1',
        task: 'Learn React',
        complete: false,
      },
      {
        id: '2',
        task: 'Learn GraphQL',
        complete: false,
      },
    ];

    const action = {
      type: 'DO_TODO',
      id: '2',
    };

    const result = todoReducer(initialState, action);

    expect(result).to.eql([
      {
        id: '1',
        task: 'Learn React',
        complete: false,
      },
      {
        id: '2',
        task: 'Learn GraphQL',
        complete: true,
      },
    ]);
  });

  it('reverts completing a todo', () => {
    const initialState = [
      {
        id: '1',
        task: 'Learn React',
        complete: false,
      },
      {
        id: '2',
        task: 'Learn GraphQL',
        complete: true,
      },
    ];

    const action = {
      type: 'UNDO_TODO',
      id: '2',
    };

    const result = todoReducer(initialState, action);

    expect(result).to.eql([
      {
        id: '1',
        task: 'Learn React',
        complete: false,
      },
      {
        id: '2',
        task: 'Learn GraphQL',
        complete: false,
      },
    ]);
  });

  it('adds a todo', () => {
    const initialState = [
      {
        id: '1',
        task: 'Learn React',
        complete: false,
      },
      {
        id: '2',
        task: 'Learn GraphQL',
        complete: false,
      },
    ];

    const action = {
      type: 'ADD_TODO',
      task: 'Learn Node',
    };

    const result = todoReducer(initialState, action);

    expect(result[2]).to.include({
      task: 'Learn Node',
      complete: false,
    });

    expect(result[2].id).to.exist;
  });
});
