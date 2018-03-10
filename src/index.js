import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Using ReactDOM.render would make first render synchronous and the placeholder would kick in immediately
// https://twitter.com/dan_abramov/status/971089064257642496
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
