import React from 'react';
import './App.css';
import SearchAppBar from './components/SearchAppBar';
import CheckboxList from './components/CheckboxList';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <CheckboxList />
    </div>
  );
}

export default App;
