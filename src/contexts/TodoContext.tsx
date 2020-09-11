import React, { createContext, useReducer } from 'react';

interface TodoType {
  id: number;
  title: string;
  isDone: boolean;
}

type TodosStateType = any;
// type TodosStateType = TodoType[];

interface TodosActionType {
  type: string;
  payload: {
    id: number;
    title: string;
    isDone: boolean;
  };
}

const initialState: TodosStateType = [{ id: 0, title: 'title', isDone: false }];

function todoReducer(state: TodosStateType, action: TodosActionType) {
  switch (action.type) {
    case 'CREATE_TODO':
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          isDone: action.payload.isDone
        }
      ];
    case 'DELETE_TODO':
      return [
        ...state.filter((todo: TodoType) => todo.id !== action.payload.id)
      ];
    default:
      return state;
  }
}

export const TodoContext = createContext<TodosStateType>(initialState);

function TodoContextProvider({ children }: any) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;