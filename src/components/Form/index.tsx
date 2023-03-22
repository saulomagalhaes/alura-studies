import React from "react";
import { v4 as uuid } from "uuid";
import { ITarefa } from "../../types/ITarefa";
import Button from "../Button";
import style from "./Form.module.scss";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

function Form({ setTarefas }: Props) {
  const [title, setTitle] = React.useState("");
  const [time, setTime] = React.useState("00:00:00");

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTarefas((prevState) => [
      ...prevState,
      { title, time, id: uuid(), completed: false, selected: false },
    ]);
    setTitle("");
    setTime("00:00:00");
  }

  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button> Adicionar </Button>
    </form>
  );
}

export default Form;
