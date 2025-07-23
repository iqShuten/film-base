import CustomCheckbox from "../../../shared/ui/CustomCheckbox/CustomCheckbox";
import type { FilmCardShema } from "../types/FilmCardShema";
import cls from "./FirmCard.module.scss";


export const FilmCard = (props: FilmCardShema ) => {
  const { name, watch  } = props

  return (
    <div className={cls.FilmCard}>
      <p>{name}</p>
      <CustomCheckbox checked={watch}/>
    </div>
  );
};