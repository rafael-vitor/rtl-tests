// import React from 'react'

// class Accordion extends React.Component {
//   state = { openIndexes: [0] }
//   setOpenIndex = openIndex => this.setState({ openIndexes: [openIndex] })

//   render() {
//     const { openIndexes } = this.state
//     return (
//       <div>
//         {this.props.items.map((item, index) => (
//           <div key={item.title}>
//             <button onClick={() => this.setOpenIndex(index)}>
//               {item.title}
//             </button>
//             {
//               openIndexes.includes(index)
//                 ? (<div className="item">{item.description}</div>)
//                 : null
//             }
//           </div>
//         ))}
//       </div>
//     )
//   }
// }

// export default Accordion

import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div>
      {items.map((item, index) => (
        <div>
          <div>
            <button onClick={() => setOpenIndex(index)}>
              {item.title}
            </button>
          </div>
          {
            index === openIndex
              ? (<div>{item.description}</div>)
              : null
          }
        </div>
      ))}
    </div>
  )
}

export default Accordion;