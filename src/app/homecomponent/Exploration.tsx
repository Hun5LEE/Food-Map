"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./exploration.module.css";

export default function Exploration() {
  return (
    <div className={styles.wrapper}>
      <h1 style={{ color: "white" }}>아... 뭐먹지?</h1>
      <br />
      <div>
        <input
          type="text"
          placeholder="현재 위치를 입력하세요"
          className={styles.inputField}
        />
        <button className={styles.searchBtn}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="xl"
            style={{ color: "white" }}
          />
        </button>
      </div>
    </div>
  );
}
