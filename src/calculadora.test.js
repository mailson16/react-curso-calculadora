import React from 'react';
import ReactDOM  from 'react-dom';
//import { render } from '@testing-library/react';
import Calculadora from './calculadora';

/*test('renders learn react link', () => {
  const { getByText } = render(<Calculadora />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/


it('teste',()=>{
  const div = document.createElement('div');
  ReactDOM.render(<Calculadora/>, div);
  ReactDOM.unmountComponentAtNode(div);
})