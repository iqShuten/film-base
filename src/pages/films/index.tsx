import type { FC } from 'react';
import { Link } from 'react-router-dom';

const index: FC = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <p>about/films.vue</p>;
    </>
  );
};

export default index;
