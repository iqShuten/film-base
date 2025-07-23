import type { FC } from 'react';
import { Navbar } from '../widgets/navbar';
import { FilmCard } from '../widgets/FilmCard';

const index: FC = () => {
  const testFilms = [
    {name: "Avatar",
    watch: true},
    {name: "Doomsday",
    watch: false},
  ]
    
  return <>
  <Navbar />
  <ul>
    {testFilms.map((item)=>(<FilmCard name={item.name} watch={item.watch}/>))}
  </ul>


  
  </>
};
export default index;

// <>
//   <div>
//     <h1 className={cls.tittle}>Vite + TypeScript</h1>

//     <p className="read-the-docs">ТЕСТОВАЯ НАДПИСЬ</p>
//   </div>

// </>
