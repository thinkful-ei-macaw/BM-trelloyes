import React from 'react';
import List from './List';
import './App.css';


function App(props) {
  console.log(props.store.lists)
  const newList = props.store.lists.map(list => 
    <List header={list.header} cards={list.cardIds.map(id => props.store.allCards[id])} key={list.id} />
    );

  return <main className='App'>
    <header className='App-header'>
      <h1>Trelloyes!</h1>
    </header>
    <div className='App-list'> 
      {newList}
    </div>
  </main>
}

export default App;
