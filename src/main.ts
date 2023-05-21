import './style.css'

import { render } from './three';

render();

const app = document.getElementById('app');

if (app) {
    app.classList.remove("hidden");
}
