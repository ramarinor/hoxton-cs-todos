import { describe, it, expect } from 'vitest';
import { addTodo, removeTodo } from './App';

describe('addTodo', () => {
  it('returns updated todos with the new todo', () => {
    const result = addTodo(
      [
        { id: 1, title: 'Learn Testing', completed: true },
        { id: 2, title: 'Feed the dog', completed: false },
        { id: 3, title: 'Send help to Ukraine', completed: true }
      ],
      { id: 204, title: 'test', completed: false }
    );
    expect(result).toMatchObject([
      { id: 204, title: 'test', completed: false },
      { id: 1, title: 'Learn Testing', completed: true },
      { id: 2, title: 'Feed the dog', completed: false },
      { id: 3, title: 'Send help to Ukraine', completed: true }
    ]);
  });
});

describe('removeTodo', () => {
  it('returns an empty array if input array is emtpy', () => {
    const result = removeTodo([], 1);
    expect(result).toMatchObject([]);
  });
  it('returns an same array if id is not found', () => {
    const result = removeTodo(
      [
        { id: 1, title: 'Learn Testing', completed: true },
        { id: 2, title: 'Feed the dog', completed: false },
        { id: 3, title: 'Send help to Ukraine', completed: true }
      ],
      30
    );
    expect(result).toMatchObject([
      { id: 1, title: 'Learn Testing', completed: true },
      { id: 2, title: 'Feed the dog', completed: false },
      { id: 3, title: 'Send help to Ukraine', completed: true }
    ]);
  });
  it('returns updated array without the specified todo', () => {
    const result = removeTodo(
      [
        { id: 1, title: 'Learn Testing', completed: true },
        { id: 2, title: 'Feed the dog', completed: false },
        { id: 3, title: 'Send help to Ukraine', completed: true }
      ],
      3
    );
    expect(result).toMatchObject([
      { id: 1, title: 'Learn Testing', completed: true },
      { id: 2, title: 'Feed the dog', completed: false }
    ]);
  });
});
