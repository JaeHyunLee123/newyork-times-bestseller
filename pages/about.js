import styles from "../styles/main.module.css";

export default function About() {
  return (
    <div>
      <h1 className={styles.title}>About</h1>
      <p className={styles.aboutParagraph}>
        Welcome to the official explorer for The New York Times Best Seller list
        explore.
      </p>
      <p className={styles.aboutParagraph}>We hope you enjoy your stay!</p>
    </div>
  );
}
