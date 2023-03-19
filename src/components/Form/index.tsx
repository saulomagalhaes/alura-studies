import React from "react";
import { ITarefa } from "../../types/ITarefa";
import Button from "../Button";
import style from "./Form.module.scss";
class Form extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}> {
  state = {
    title: "",
    time: "00:00:00",
  };

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTarefas((prevState) => [
      ...prevState,
      { ...this.state, id: prevState.length + 1 },
    ]);
    this.setState({ title: "", time: "00:00:00" });
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.title}
            onChange={(event) =>
              this.setState({ ...this.state, title: event.target.value })
            }
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
            value={this.state.time}
            onChange={(event) =>
              this.setState({ ...this.state, time: event.target.value })
            }
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
}

export default Form;
