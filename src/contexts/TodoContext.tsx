import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todoReducer';

type TodoType = {
  id: number;
  title: string;
  isDone: boolean;
};

type InitialStateType = {
  todos: TodoType[];
};

const initialState = {
  todos: []
};

export const TodoContext = createContext<InitialStateType>(initialState);

function TodoContextProvider({ children }: any) {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
