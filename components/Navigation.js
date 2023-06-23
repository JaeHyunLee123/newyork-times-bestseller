import Link from "next/link";
import styles from "../styles/Navigation.module.css";

export default function NavigationBar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a className={styles.link}>Home</a>
      </Link>
      <Link href="/about">
        <a className={styles.link}>About</a>
      </Link>
    </nav>
  );
}
