import './global.css';
import App from './App.svelte';
import 'highlight.js/styles/github-dark.css';

const app = new App({
  target: document.getElementById('app'),
});

export default app;
