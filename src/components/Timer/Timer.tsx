import { useEffect, useState } from "react";
import styles from "./Timer.module.css";

export const Clock = () => {
  const [time, setTime] = useState(0);

  const [timerId, setTimerId] = useState<NodeJS.Timeout>();

  const onClickStart = () => {
    const intervalId = setInterval(() => {
      setTime((time) => time + 1);
      console.log("setInterval");
    }, 1000);

    setTimerId(intervalId);
  };

  const onClickStop = () => {
    if (timerId) {
      clearInterval(timerId);
    }
  };

  const onClickReset = () => {
    if (timerId) {
      clearInterval(timerId);
    }
    setTime(0);
  };

  const formatTime = () => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes: any = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className={styles.clock}>
      <div>{formatTime()}</div>
      <div className={styles.btns}>
        <button onClick={onClickStart}>Start</button>
        <button onClick={onClickStop}>Stop</button>
        <button onClick={onClickReset}>Reset</button>
      </div>
    </div>
  );
};
