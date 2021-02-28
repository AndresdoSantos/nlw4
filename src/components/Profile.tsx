import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/AndresdoSantos.png"
        alt="Imagem do usuário"
      />
      <div>
        <strong>Andres doSantos</strong>
        <p>
          <img src="icons/level.svg" alt="Ícone de seta para cima" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
