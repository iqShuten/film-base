import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import cls from './App.module.scss';

export default function App() {
  return (
    <>
      <div>
        <h1 className={cls.tittle}>Vite + TypeScript</h1>

        <p className="read-the-docs">ТЕСТОВАЯ НАДПИСЬ</p>
      </div>
      <Router>
        <Routes>
          {}
        </Routes>
      </Router>
    </>
  );
}
