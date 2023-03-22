import { ITarefa } from "../../../types/ITarefa";
import style from "./Item.module.scss";

interface Props extends ITarefa {
  getTask: (taskSelected: ITarefa) => void;
}

export default function Item({
  id,
  title,
  time,
  completed,
  selected,
  getTask,
}: Props) {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelecionado : ""} ${
        completed ? style.itemCompletado : ""
      }`}
      onClick={() =>
        !completed && getTask({ id, title, time, completed, selected })
      }
    >
      <h3>{title}</h3>
      <span>{time}</span>
      {completed && (
        <span className={style.concluido} aria-label="tarefa completada"></span>
      )}
    </li>
  );
}
