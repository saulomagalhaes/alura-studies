import "./style.scss";

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
    <aside className="listaTarefas">
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} className="item">
            <h3>{tarefa.title}</h3>
            <span>{tarefa.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
export default List;
