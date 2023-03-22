import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/ITarefa";
import Button from "../Button";
import style from "./Countdown.module.scss";
import Watch from "./Watch";

interface Props {
  selected: ITarefa | undefined;
}

export default function Countdown({ selected }: Props) {
  const [currentTime, setCurrentTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setCurrentTime(tempoParaSegundos(selected.time));
    }
  }, [selected]);

  function regressive(time: number = 0) {
    setTimeout(() => {
      if (time > 0) {
        setCurrentTime(time - 1);
        return regressive(time - 1);
      }
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch currentTime={currentTime} />
      </div>
      <Button onClick={() => regressive(currentTime)}>Começar</Button>
    </div>
  );
}
