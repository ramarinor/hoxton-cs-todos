import { useEffect, useState } from 'react';
import './App.css';
import { initialTodos } from './initialTodos';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
export function addTodo(todos: Todo[], newTodo: Todo): Todo[] {
  const updatedTodos = [newTodo, ...todos];
  return updatedTodos;
}

export function removeTodo(todos: Todo[], id: number) {
  let updatedTodos = JSON.parse(JSON.stringify(todos));
  updatedTodos = updatedTodos.filter((todo: Todo) => todo.id !== id);
  return updatedTodos;
}
function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newTodo: Todo = {
      //@ts-ignore
      title: e.target.text.value,
      completed: false,
      id: Math.random()
    };

    const updatedTodos = addTodo(todos, newTodo);
    setTodos(updatedTodos);

    //@ts-ignore
    e.target.reset();
  };

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit} className='add-item'>
        <input
          className='text-input'
          type='text'
          name='text'
          required
          minLength={3}
        />
        <button type='submit'>Add</button>
      </form>
      <main>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}
              <button
                onClick={() => {
                  const updatedTodos = removeTodo(todos, todo.id);
                  setTodos(updatedTodos);
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
