import React from 'react';
import './App.css';
import TodoContextProvider from './contexts/TodoContext';
import SearchAppBar from './components/SearchAppBar';
import CheckboxList from './components/CheckboxList';
import BottomAppBar from './components/BottomAppBar';

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <SearchAppBar />
        <CheckboxList />
        <BottomAppBar />
      </TodoContextProvider>
    </div>
  );
}

export default App;
