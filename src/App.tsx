import React from 'react';
import './App.css';
import SearchAppBar from './components/SearchAppBar';
import CheckboxList from './components/CheckboxList';
import BottomAppBar from './components/BottomAppBar';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <CheckboxList />
      <BottomAppBar />
    </div>
  );
}

export default App;
