import React from 'react'
import useCounter from '../';
import { render } from 'react-testing-library';
// import { act } from 'react-dom/test-utils';
// import { renderHook, act } from 'react-hooks-testing-library'


// const TestHook = ({ callback }) => {
//   callback()
//   return null
// }

// test('useCounter', () => {
//   let count, increment
//   render(<TestHook callback={() => ({count, increment} = useCounter())} />)

//   expect(count).toBe(0)

//   act(() => {
//     increment()
//   })

//   expect(count).toBe(1)
// })

import { renderHook, act } from 'react-hooks-testing-library'

test('useCounter', () => {
  const { result } = renderHook(() => useCounter())

  expect(result.current.count).toBe(0)
 
  act(() => result.current.increment())
 
  expect(result.current.count).toBe(1)
})