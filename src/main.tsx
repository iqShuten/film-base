import App from './pages/App';
import { createRoot } from 'react-dom/client';
import './style.css';
import React from 'react';

const container = document.getElementById('root');
if (!container) throw new Error('Root container not found');
const root = createRoot(container);

root.render(<App />);
