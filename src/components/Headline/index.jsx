import classes from "src/components/Headline/Headline.module.css";

export function Headline(props) {
  return (
    <>
      <h1 className={classes.title}>{props.page} page</h1>
      <p>Get started by editing&nbsp;{props.children}</p>

      <button onClick={props.handleReduce}>へらす</button>
    </>
  );
}
