import styles from "./category.module.css";

export default function Category() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Category</h3>
      <div className={styles.category}>
        <img src="/home_bg.jpg" width={200} />

        <img src="/home_bg.jpg" width={200} />

        <img src="/home_bg.jpg" width={200} />

        <img src="/home_bg.jpg" width={200} />
      </div>
    </div>
  );
}
