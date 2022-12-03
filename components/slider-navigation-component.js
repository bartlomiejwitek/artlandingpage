import Image from "next/image";

export default function SliderNavigationComponent({
  className = "",
  children,
  onClickHandler,
}) {
  return (
    <div
      style={{ cursor: "pointer" }}
      className={className}
      onClick={onClickHandler}
    >
      {children}
    </div>
  );
}
