import type { FilmCardShema } from "../types/FilmCardShema";
import cls from "./FirmCard.module.scss";


export const FilmCard = (props: FilmCardShema ) => {
  const { name, watch  } = props

  return (
    <div className={cls.FilmCard}>
      <p>{name}</p>
      <input 
        type="checkbox" 
        checked={watch}
        // onChange={handleChange}
      />
    </div>
  );
};