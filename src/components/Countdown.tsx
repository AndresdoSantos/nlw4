import { useState, useEffect, useContext } from 'react';

import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCoutdown,
    resetCoutdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.coutdownButton}>
          Ciclo encerrado
          <img
            src="icons/check.png"
            alt="Ícone indicando que o desafio foi concluído"
          />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              onClick={resetCoutdown}
              type="button"
              className={`${styles.coutdownButton} ${styles.coutdownButtonActive}`}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              onClick={startCoutdown}
              type="button"
              className={styles.coutdownButton}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
