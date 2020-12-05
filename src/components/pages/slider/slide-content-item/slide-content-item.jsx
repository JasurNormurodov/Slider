import React from 'react';

import * as styles from './slide-content-item.scss';

export default ({ header, description, children }) => {
  return (
    <div>
      <h2 className={styles.header}>{header}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.children}>{children}</div>
    </div>
  );
};
