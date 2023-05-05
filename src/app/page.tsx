import styles from "./page.module.css";
import Header from "./homecomponent/Header";
import Exploration from "./homecomponent/Exploration";
import Category from "./homecomponent/Category";

export default function Home() {
  return (
    <>
      <div className={styles.bg}>
        <Header />
        <Exploration />
        <Category />
      </div>
    </>
  );
}

// @media screen and (max-width:1023px) {
//   /* 타블렛 */
//   }

//   @media screen and (max-width:767px) {
//   /* 모바일 */
//   }
