import React from 'react';
import store from './store';
import List from './List';
import './App.css';

function App(store) {
  const newList = store.list.map(list => 
    <List key={list.id} header={list.header} />
  )
  return <main className='App'>
    <header className='App-header'>
      <h1>Trelloyes</h1>
    </header>
    <div className='App-list'>
      {newList}
    </div>
  </main>
}

export default App;
