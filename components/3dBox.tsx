"use client";

import { useState } from "react";
import styles from "./3dBox.module.css";

const Box = ({ backgroundPosition }) => {
  return <div className={styles.box} style={{ backgroundPosition: backgroundPosition }}></div>;
};

const ThreeDBox = () => {
  const [isBig, setIsBig] = useState(false);

  const toggleSize = () => {
    setIsBig(!isBig);
  };

  const createBoxes = () => {
    const boxes: JSX.Element[] = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        boxes.push(
          //   <div key={`${i}-${j}`} className={styles.box} style={{ backgroundPosition: `${-j * 125}px ${-i * 125}px` }} />
          <Box key={`${i}-${j}`} backgroundPosition={`${-j * 125}px ${-i * 125}px`} />
        );
      }
    }
    return boxes;
  };

  return (
    <div className={styles.body}>
      <button className={styles.magic} onClick={toggleSize}>
        Magic 🎩
      </button>
      {/* <div id="boxes" className={`${styles.boxes} ${isBig ? styles.big : ""}`}> */}
      <div id="boxes" className={isBig ? `${styles.boxes} ${styles.big}` : styles.boxes}>
        {createBoxes()}
      </div>
    </div>
  );
};

export { ThreeDBox };
