import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Chai from './Chai';

const myObj = {
  'type': 'a',
  'props': {
    'href': 'https://www.google.com/',
    'target': '_blank',
  },
  'children': 'Click me to visit google!'
};

const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com/',
    target: '_blank',
  },
  'Hi Google!'
)

const root = ReactDOM.createRoot(document.getElementById('root')).
render(
  reactElement
)
