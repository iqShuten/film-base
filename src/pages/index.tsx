import type { FC } from 'react';
import { Navbar } from '../widgets/navbar';
import { FilmCard } from '../widgets/FilmCard';
import { Checkbox } from '../shared/ui/Checkbox/Checkbox';

const index: FC = () => {
  const testFilms = {
    name: "Avatar",
    watch: true
  }
  return <>
  <Navbar />
  <FilmCard name={testFilms.name} watch = {testFilms.watch}/>
  <Checkbox />
  
  </>
};
export default index;

// <>
//   <div>
//     <h1 className={cls.tittle}>Vite + TypeScript</h1>

//     <p className="read-the-docs">ТЕСТОВАЯ НАДПИСЬ</p>
//   </div>

// </>
