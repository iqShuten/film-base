import { useState, type FC } from 'react';
import { Navbar } from '../widgets/navbar';
import { FilmCard } from '../widgets/FilmCard';
import { fetchAllDataFirebase } from '../shared/api/localRequest/localRequest';

const index: FC = () => { 
  // объект для теста
  const testFilms = [
    {name: "Avatar",
    watch: true},
    {name: "Doomsday",
    watch: false},
  ]

  const [base, setBase] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]
  
  
  fetchAllDataFirebase().then(data => console.log(data))
  

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
