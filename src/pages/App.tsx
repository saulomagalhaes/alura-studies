import { useState } from "react";
import Countdown from "../components/Countdown";
import Form from "../components/Form";
import List from "../components/List";
import { ITarefa } from "../types/ITarefa";
import style from "./App.module.scss";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selected, setSelected] = useState<ITarefa>();

  function getTask(taskSelected: ITarefa) {
    setSelected(taskSelected);
    setTarefas((prevTask) =>
      prevTask.map((task) => ({
        ...task,
        selected: task.id === taskSelected.id ? true : false,
      }))
    );
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} getTask={getTask} />
      <Countdown selected={selected} />
    </div>
  );
}

export default App;
