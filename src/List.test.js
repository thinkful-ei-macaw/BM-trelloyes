import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('<List />', () => {
  it('renders Card without crashing', () => {
      const div = document.createElement('div');

      ReactDOM.render(<List header='string' cards={['a']} key={1}/>, div);

      ReactDOM.unmountComponentAtNode(div);    
  })

  it('renders this UI as expected', () => {
    const card = renderer.create(<List header='string' cards={['a']} key={1}/>).toJSON();
    expect(card).toMatchSnapshot();
  })
})