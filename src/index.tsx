import { render } from 'solid-js/dom';

import './index.global.css';
import App from './app';

const appRoot = document.getElementById('app-root');

if (appRoot) render(() => <App />, appRoot);
