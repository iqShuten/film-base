import App from './app/App';
import { createRoot } from 'react-dom/client';
import './style.css';
import React from 'react';

const container = document.getElementById('root');
if (!container) throw new Error('Root container not found');
const root = createRoot(container);

root.render(<h1>text</h1>);
// root.render(<App />);
