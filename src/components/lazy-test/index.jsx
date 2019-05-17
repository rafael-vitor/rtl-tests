import React from 'react';

const LazyComponent = React.lazy(() => import('./lazy'));

const Wrapper = () => {
  return (
    <div>
      <div> Lazy component here: </div>
      <LazyComponent />
    </div>
  )
}

export default Wrapper
