import { Link, useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorModal = () => {
  const error = useRouteError();

  return (
    <div className={styles.container}>
      <h1>An error occured</h1>
      {error.data && <p>{error.data.message}</p>}
      <Link to="/" className={styles.link}>
        Go back
      </Link>
    </div>
  );
};

export default ErrorModal;
