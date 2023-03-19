import { useState } from "react";
import Countdown from "../components/Countdown";
import Form from "../components/Form";
import List from "../components/List";
import { ITarefa } from "../types/ITarefa";
import style from "./App.module.scss";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} />
      <Countdown />
    </div>
  );
}

export default App;
