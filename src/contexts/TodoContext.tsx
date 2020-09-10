import React, { createContext } from 'react';

type ContextProps = {
  array: number[];
};

export const TodoContext = createContext<Partial<ContextProps>>({});

function TodoContextProvider({ children }: any) {
  const array = [10, 11, 12, 13];
  return (
    <TodoContext.Provider value={{ array }}>{children}</TodoContext.Provider>
  );
}

export default TodoContextProvider;
