import React from 'react';
import Card from './Card';
import store from './store';

function List(header, cards) {
    cards = store.allCards.find(cards => 
        store.cardIds === cards);

    return <section className='List'>
        <header class="List-header">
          <h2>{header}</h2>
        </header>
        <div className="List-cards">{Card()}</div>

    </section>
}

export default List;