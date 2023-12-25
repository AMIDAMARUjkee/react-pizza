import React from 'react';

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>🫥</span>
        <br />
        НИЧЕГО НЕ НАЙДЕНО
      </h1>
      <p className={styles.description}>Извините, но данной страницы не существует здесь</p>
    </div>
  );
};
