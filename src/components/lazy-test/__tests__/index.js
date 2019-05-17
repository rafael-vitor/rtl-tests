import React from 'react';
import { render, wait, waitForElement } from 'react-testing-library';

import Wrapper from '../';

test('renders lazy', async () => {
  const { getByText } = render(
    <React.Suspense fallback="loading...">
      <Wrapper />
    </React.Suspense>
  );

  const lazyElement = await waitForElement(() => getByText('I am lazy'));

  expect(getByText('I am lazy')).toBeInTheDocument();
})