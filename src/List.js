import React from 'react';
import Card from './Card';
import './List.css';


function List(props) {
    console.log(props.cards);
    const currentCard = props.cards.map(card => 
    <Card title={card.title} content = {card.content}/>);
      
    return <section className='List'>
        <header className="List-header">
          <h2>{props.header}</h2>
        </header>
        <div className="List-cards">
            {currentCard}
        </div>

    </section>
}

export default List;