import { type FC } from 'react';
import { Navbar } from '../widgets/navbar';
import { FilmCard } from '../widgets/FilmCard';
import KinopoiskSearch from '../shared/api/kinopoisk/kinopoiskSearch';

const index: FC = () => { 
  // объект для теста
  const testFilms = [
    {name: "Avatar",
    watch: true},
    {name: "Doomsday",
    watch: false},
  ]

  // fetchAllDataFirebase().then(data => console.log(data))
  
  return <>
    <Navbar />
    <KinopoiskSearch/>
      <ul>
        {testFilms.map((item)=>(<FilmCard name={item.name} watch={item.watch}/>))}
      </ul> 
  </>
};

export default index;
