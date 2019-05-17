import React from 'react'

// RTL
import { render, fireEvent } from 'react-testing-library'

import Counter from '../'

it('counter increments the count with RTL', () => {
  const component = render(<Counter />)

  const button = component.getByText('button');
  const currentCount = component.getByTestId('current-count');

  expect(currentCount.textContent).toBe('0')
  expect(document.title).toBe('you clicked 0 times')

  fireEvent.click(button)

  expect(currentCount.textContent).toBe('1')

  expect(document.title).toBe('you clicked 1 times')
})

// test-utils
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

it('counter increments the count with test-utils', () => {
  let container = document.createElement('div');
  document.body.appendChild(container);

  // Test first render and effect
  act(() => {
    ReactDOM.render(<Counter />, container);
  });

  const button = container.querySelector('button');
  const label = container.querySelector('p');

  expect(label.textContent).toBe('0');
  expect(document.title).toBe('you clicked 0 times');

  // Test second render and effect
  act(() => {
    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });

  expect(label.textContent).toBe('1');
  expect(document.title).toBe('you clicked 1 times');

  document.body.removeChild(container);
  container = null;
})


//enzyme
// import React from 'react';
// import Counter from '../'
import { mount, shallow } from 'enzyme';
// import { act } from 'react-dom/test-utils';

it.only('counter increments the count with enzyme mount', () => {
  const component = shallow(<Counter />);
  console.log(component.shallow())
  console.log(component.debug())

  // expect(document.title).toBe('you clicked 0 times');
  expect(component.find('p').text()).toBe('0')

  act(() => {
    component.find('button').simulate('click');
  })

  // expect(document.title).toBe('you clicked 1 times');

  expect(component.find('p').text()).toBe('1')
})
