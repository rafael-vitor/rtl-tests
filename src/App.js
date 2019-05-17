import React from 'react';

import Counter from './components/counter';
import Accordion from './components/accordion';

const items = [
  { title: 'item 1', description: 'one' },
  { title: 'item 2', description: 'two' },
  { title: 'item 3', description: 'three' },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="demo-item">
        <Counter />
      </div>
      <div className="demo-item">
        <Accordion items={items} />
      </div>
      </header>
    </div>
  );
}

export default App;
