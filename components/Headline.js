import styles from "../styles/Home.module.css";

export function Headline(props) {
  return (
    <>
      <h1 className={styles.title}>{props.page} page</h1>
      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>pages/{props.page}.js</code>
      </p>
    </>
  );
}
