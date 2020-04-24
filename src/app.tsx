import React, { Suspense, lazy } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from './style/global-style';
import { defaultTheme } from './style/theme';
import type { FCWithoutChildren } from './types/component';

const Loading: FCWithoutChildren = () => <div>Loading...</div>;

const App: FCWithoutChildren = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <UIRoot>
      <Suspense fallback={<Loading />}>
        <LazyCount initialCount={0} />
        <LazyCount initialCount={10} />
      </Suspense>
    </UIRoot>
  </ThemeProvider>
);

export default App;

const LazyCount = lazy(() => import('./components/count'));

const UIRoot = styled.div`
  min-height: 100%;
  padding: 1em;
  color: ${({ theme }) => theme.colors.bodyText};
  font-family: ${({ theme }) => theme.fonts.bodyText};
  background-color: ${({ theme }) => theme.colors.background};
`;
