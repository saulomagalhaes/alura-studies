import { ITarefa } from "../../../types/ITarefa";
import style from "../List.module.scss";

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
      className={`${style.item} ${selected && style.itemSelecionado}`}
      onClick={() => getTask({ id, title, time, completed, selected })}
    >
      <h3>{title}</h3>
      <span>{time}</span>
    </li>
  );
}
