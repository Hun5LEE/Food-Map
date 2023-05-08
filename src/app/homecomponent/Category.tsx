import styles from "./category.module.css";
import Link from "next/link";

export default function Category() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Category</h3>
      <div className={styles.category}>
        <Link href={"/mapchart/1"}>
          <img src="/home_bg.jpg" width={200} />
        </Link>
        <img src="/home_bg.jpg" width={200} />
        <img src="/home_bg.jpg" width={200} />
        <img src="/home_bg.jpg" width={200} />
      </div>
    </div>
  );
}
