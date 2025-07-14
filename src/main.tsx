import { createRoot } from 'react-dom/client';
import './style.css';
import { StrictMode, Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from 'virtual:generated-pages-react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

function App() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="suspense-fallback">
            <ClimbingBoxLoader color="#c401ffff" loading speedMultiplier={2} />
            <p>Loading...</p>
          </div>
        }
      >
        {useRoutes(routes)}
      </Suspense>
    </div>
  );
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
