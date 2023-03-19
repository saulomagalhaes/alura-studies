import { ITarefa } from "../../types/ITarefa";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
  tarefas: ITarefa[];
  getTask: (taskSelected: ITarefa) => void;
}

function List({ tarefas, getTask }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa) => (
          <Item key={tarefa.id} getTask={getTask} {...tarefa} />
        ))}
      </ul>
    </aside>
  );
}
export default List;
