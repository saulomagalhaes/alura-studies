import style from "../List.module.scss";

export default function Item({ title, time }: { title: string; time: string }) {
  return (
    <li className={style.item}>
      <h3>{title}</h3>
      <span>{time}</span>
    </li>
  );
}
