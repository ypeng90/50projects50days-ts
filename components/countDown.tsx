"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./countDown.module.css";

const CountDown = () => {
  const [currentNumber, setCurrentNumber] = useState(3);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (currentNumber > -1) {
      if (spanRef.current) {
        spanRef.current.className = styles.in;
      }
      const timer1 = setTimeout(() => {
        if (spanRef.current) {
          spanRef.current.className = styles.out;
        }
      }, 500);
      const timer2 = setTimeout(() => {
        setCurrentNumber(currentNumber - 1);
      }, 1000);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      setShowFinalMessage(true);
    }
  }, [currentNumber]);

  return (
    <div className={styles.body}>
      <div className={showFinalMessage ? `${styles.counter} ${styles.hide}` : styles.counter}>
        <div className={styles.nums}>
          <span ref={spanRef}>{currentNumber}</span>
        </div>
        <h4>Get Ready</h4>
      </div>

      <div className={showFinalMessage ? `${styles.final} ${styles.show}` : styles.final}>
        <h1>GO</h1>
        <button
          id={styles.replay}
          onClick={() => {
            setCurrentNumber(3);
            setShowFinalMessage(false);
          }}
        >
          <span>Replay</span>
        </button>
      </div>
    </div>
  );
};

export { CountDown };
