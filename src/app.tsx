import { lazy } from 'solid-js';
import { Suspense } from 'solid-js/dom';

import classNames from './app.local.css';

// TODO: Remove 'any' cast pending type fixes
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LazyCount = lazy(() => import('./components/count')) as any;
const Loading = () => <div>Loading...</div>;

export default () => (
  <div className={classNames.root}>
    <Suspense fallback={Loading}>
      <LazyCount initialCount={0} />
      <LazyCount initialCount={10} />
    </Suspense>
  </div>
);
