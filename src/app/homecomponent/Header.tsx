// 5.3 - 메인페이지의 Header

import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div style={{ marginLeft: "1rem" }}>AmomokZ</div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "1rem" }}>My Page</div>
          <div style={{ marginRight: "1rem" }}>Login</div>
        </div>
      </div>
    </div>
  );
}
