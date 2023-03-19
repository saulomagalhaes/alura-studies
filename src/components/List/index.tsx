import { ITarefa } from "../../types/ITarefa";
import Item from "./Item";
import style from "./List.module.scss";

function List({ tarefas }: { tarefas: ITarefa[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa) => (
          <Item key={tarefa.id} title={tarefa.title} time={tarefa.time} />
        ))}
      </ul>
    </aside>
  );
}
export default List;
