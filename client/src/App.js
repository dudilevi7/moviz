import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import Copyright from './Copyright/Copyright';

function App() {
  return (
    <div className="App">
      <Header />
      <Table />
      <Copyright />
    </div>
  )
}

export default App;
