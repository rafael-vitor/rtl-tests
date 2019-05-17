// __tests__/accordion.enzyme.js
import React from 'react'

import { mount } from 'enzyme'

import {render, fireEvent} from 'react-testing-library'

import Accordion from '../'


test('can open accordion items to see the description', () => {
  const pikachu = { 
    title: 'detective', description: 'sounds like deadpool' 
  }
  const bulbasaur = {
    title: 'bulbasaur', description: 'is the number 1'
  }
  const {getByText, queryByText} = render(
    <Accordion items={[pikachu, bulbasaur]} />,
  )

  expect(getByText(pikachu.description)).toBeInTheDocument()
  expect(queryByText(bulbasaur.description)).toBeNull()

  fireEvent.click(getByText(bulbasaur.title))

  expect(getByText(bulbasaur.description)).toBeInTheDocument()
  expect(queryByText(pikachu.description)).toBeNull()
})


// test('setOpenIndex sets the open index state properly', () => {
//   const wrapper = mount(<Accordion items={[]} />)

//   expect(wrapper.state('openIndexes')).toEqual([0])

//   wrapper.instance().setOpenIndex(1)

//   expect(wrapper.state('openIndexes')).toEqual([1])
// })


// test('Accordion renders accordion item with the item description', () => {
//   const pikachu = { 
//     title: 'detective', description: 'sounds like deadpool' 
//   }
//   const bulbasaur = {
//     title: 'bulbasaur', description: 'is the number 1'
//   }
//   const wrapper = mount(<Accordion items={[pikachu, bulbasaur]} />)

//   expect(wrapper.find('.item').props().children).toBe(pikachu.description)
// })



