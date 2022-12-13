import Image from "next/image";
import style from "../styles/slider-navigation-component.module.css";

export default function SliderNavigationComponent({
  className = "",
  children,
  onClickHandler,
  show,
}) {
  return (
    <div
      style={{ cursor: "pointer" }}
      className={`${className} ${style.button} ${show ? style.show : ""}`}
      onClick={onClickHandler}
    >
      {children}
    </div>
  );
}
