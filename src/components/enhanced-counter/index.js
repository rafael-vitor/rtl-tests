// import React from 'react';

// class EnhancedCounter extends React.Component {
//   state = {
//     count: Number(window.localStorage.getItem('count') || 0),
//   }

//   increment = () => this.setState(({count}) => ({count: count + 1}))

//   componentDidMount() {
//     window.localStorage.setItem('count', this.state.count)
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.count !== this.state.count) {
//       window.localStorage.setItem('count', this.state.count)
//     }
//   }

//   render() {
//     return <button onClick={this.increment}>{this.state.count}</button>
//   }
// }

// export default EnhancedCounter;


import React, {useState, useEffect} from 'react'

const EnhancedCounter = () => {
  const [count, setCount] = useState(() =>
    Number(window.localStorage.getItem('count') || 0),
  )

  const incrementCount = () => setCount(c => c + 1)

  useEffect(() => {
    window.localStorage.setItem('count', count)
  }, [count])

  return <button onClick={incrementCount}>{count}</button>
}

export default EnhancedCounter;