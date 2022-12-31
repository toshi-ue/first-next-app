import styles from "../styles/Home.module.css";

export function Headline(props) {
  console.log(props);

  return (
    <>
      <h1 className={styles.title}>{props.page} page</h1>
      <p>Get started by editing&nbsp;{props.code}</p>

      <button onClick={props.onClick}>ボタン</button>
      <p>{props.children}</p>
    </>
  );
}
