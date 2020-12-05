import React from 'react';

import leftBackgroundShape from './images/left-background-shape.png';
import rightBackgroundShape from './images/right-background-shape.png';
import * as styles from './slider.module.scss';

const Slider = () => {
  return (
    <div className={styles.slider}>
      <img src={leftBackgroundShape} alt="Left shape" />
      <img src={rightBackgroundShape} alt="Right shape" />
    </div>
  );
};

export default Slider;
