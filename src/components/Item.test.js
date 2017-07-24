import React from 'react';
import ReactDOM from 'react-dom';
import Item from './Item';
import ReactTestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Item />, div);
});


