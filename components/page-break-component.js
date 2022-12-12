import styles from "../styles/page-break-component.module.css";

export default function PageBreakComponent({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerLeft}></div>
      <div className={styles.inner}>{children}</div>
      <div className={styles.innerRight}></div>
    </div>
  );
}
