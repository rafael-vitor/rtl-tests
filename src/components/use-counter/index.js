import { useState } from 'react';

const useCounter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(currentCount => currentCount + 1)

  return {count, increment}
}

export default useCounter

// usage:
// const Counter = () => {
//   const {count, increment} = useCounter()
//   return <button onClick={increment}>{count}</button>
// }