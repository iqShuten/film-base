import { Link } from 'react-router-dom';
import cls from './navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={cls.block}>
      <Link to="/films">Films |</Link>
      <Link to="/about"> about(заглушка) |</Link>
      <Link to="/future"> Будущее(заглушка) |</Link>
    </div>
  );
};
