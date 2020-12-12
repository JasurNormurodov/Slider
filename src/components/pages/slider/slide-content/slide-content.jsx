import React, { useEffect, useState } from 'react';

// import dotPattern from '../../../../images/pages/dot-pattern.svg';
import DotPattern from './images/dot-pattern.inline.svg';
import * as styles from './slide-content.module.scss';

const SlideContent = ({ params }) => {
  const { title, description, image, isPatternUp } = params;

  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade((prevFade) => !prevFade);
  }, [title]);
  return (
    <div className={styles.content}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={styles.maket}>
        <div className={fade ? styles.panel : styles.panelFade}>{image}</div>
        <div className={isPatternUp ? styles.dotPatternUp : styles.dotPatternDown}>
          <DotPattern />
        </div>
      </div>
    </div>
  );
};

export default SlideContent;
