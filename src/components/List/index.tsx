import Item from "./Item";
import style from "./List.module.scss";

function List() {
  const tarefas = [
    {
      id: 1,
      title: "React",
      time: "02:00:00",
    },
    {
      id: 2,
      title: "Javascript",
      time: "01:00:00",
    },
    {
      id: 3,
      title: "Typescript",
      time: "01:00:00",
    },
  ];
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
