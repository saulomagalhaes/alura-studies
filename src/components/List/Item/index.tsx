import { ITarefa } from "../../../types/ITarefa";
import style from "../List.module.scss";

export default function Item({ title, time, completed, selected }: ITarefa) {
  return (
    <li className={style.item}>
      <h3>{title}</h3>
      <span>{time}</span>
    </li>
  );
}
