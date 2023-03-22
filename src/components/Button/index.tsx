import React from "react";
import style from "./Button.module.scss";

class Button extends React.Component<{
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}> {
  render() {
    const { type = "submit", onClick } = this.props;
    return (
      <button onClick={onClick} type={type} className={style.botao}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
