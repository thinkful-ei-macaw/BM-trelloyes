import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('<Card />', () => {
    it('renders Card without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<Card title='String' content='another string'/>, div);

        ReactDOM.unmountComponentAtNode(div);    
    }) 

    it('renders this UI as expected', () => {
        const card = renderer.create(<Card title='string' content='anotherstring'/>).toJSON();
        expect(card).toMatchSnapshot();
    })
});

  
