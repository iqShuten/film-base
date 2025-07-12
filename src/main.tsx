import { createRoot } from 'react-dom/client';
import './style.css';
import { StrictMode, Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from 'virtual:generated-pages-react';

function App() {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
}

const container = document.getElementById('root');
if (!container) throw new Error('Root container not found');
const root = createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
