import NavigationBar from "./Navigation";
import styles from "../styles/main.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <NavigationBar />
      <div>{children}</div>
    </div>
  );
}
