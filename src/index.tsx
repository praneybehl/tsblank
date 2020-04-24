import { render } from 'solid-js/dom';
// Rename import to preserve vscode syntax highlighting
import { glob as injectGlobal } from 'solid-styled-components';

import App from './app';

const appRoot = document.getElementById('app-root');

if (!appRoot) throw new Error('Could not find #app-root in document');

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  #app-root {
    width: 100vw;
    height: 100vh;
    -webkit-overflow-scrolling: touch;
  }
`;

render(() => <App />, appRoot);
