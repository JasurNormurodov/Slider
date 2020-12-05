import React from 'react';

import * as styles from './slide-navigation-item.scss';

export default ({ title, children }) => {
  return (
    <div>
      <h4 className={styles.title}>{title}</h4>
      <span className={styles.iconWrapper}>{children}</span>
    </div>
  );
};
