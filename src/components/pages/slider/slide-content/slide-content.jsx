import React from 'react';

import dotPattern from '../../../../images/pages/dot-pattern.svg';
import capacityPanel from '../../../../images/pages/panels/capacity-panel.svg';
import communicationPanel from '../../../../images/pages/panels/communication-panel.svg';
import managementPanel from '../../../../images/pages/panels/management-panel.svg';
import schedulesPanel from '../../../../images/pages/panels/schedules-panel.svg';

import * as styles from './slide-content.module.scss';

const SlideContent = ({ params }) => {
  const { title, description, panel, isPatternUp } = params;
  return (
    <div className={styles.content}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={styles.maket}>
        <div className={styles.panel}>
          <img src={panel} alt="title" />
        </div>
        <div className={isPatternUp ? styles.dotPatternUp : styles.dotPatternDown}>
          <img src={dotPattern} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SlideContent;
