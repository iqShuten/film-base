import { Link } from 'react-router-dom';
import cls from './index.module.scss';
import type { FC } from 'react';

const index: FC = () => {
  return (
    <div className={cls.tittle}>
      <p>index.vue</p>
      <Link to="/films">Films |</Link>
      <Link to="/about"> about(заглушка) |</Link>
      <Link to="/future"> Будущее(заглушка) |</Link>
    </div>
  );
};
export default index;

// <>
//   <div>
//     <h1 className={cls.tittle}>Vite + TypeScript</h1>

//     <p className="read-the-docs">ТЕСТОВАЯ НАДПИСЬ</p>
//   </div>

// </>
