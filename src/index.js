
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

import './styles/main.css'
import './styles/animations.css'

import './assets/bg.jpg'
import './assets/FreeSans.otf'


import eruda from 'eruda'
eruda.init();

const root = createRoot(document.getElementById('root'));
root.render(<App/>);