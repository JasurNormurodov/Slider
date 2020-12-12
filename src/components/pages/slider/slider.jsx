import React, { useState, useEffect } from 'react';

import LeftBackgroundShape from './images/left-background-shape.inline.svg';
import CapacityPanel from './images/panels/capacity-panel.inline.svg';
import CommunicationPanel from './images/panels/communication-panel.inline.svg';
import ManagementPanel from './images/panels/management-panel.inline.svg';
import SchedulesPanel from './images/panels/schedules-panel.inline.svg';
import RightBackgroundShape from './images/right-background-shape.inline.svg';
import SlideContent from './slide-content';
import SlideNavigationItemList from './slide-navigation-item-list';
import * as styles from './slider.module.scss';

const content = {
  'Capacity planning': {
    description: `Set capacity limits and turn on alerts to limit access when the building reaches capacity.
  Ensure social distancing and avoid overcrowding.`,
    image: <CapacityPanel />,
    patternUp: true,
  },
  'Staggered schedules': {
    description: `Create multiple user groups and assign staggered schedules to users.
   Deny access outside of a set schedule. Change and update schedules easily 
   that employees can check from the app.`,
    image: <SchedulesPanel />,
    patternUp: false,
  },
  'PPE management': {
    description: `Keep track of all your critical PPE inventory. Prioritize and track PPE allocation to highest at-risk employees.`,
    image: <ManagementPanel />,
    patternUp: true,
  },
  'Employee communication': {
    description: `Send out timely announcements for COVID-19 health-related news and guidelines, directly in the app. Ensure employees update critical contacts in case
  of emergency.`,
    image: <CommunicationPanel />,
    patternUp: false,
  },
};

const Slider = () => {
  const keys = Object.keys(content);
  const [active, setActive] = useState(keys[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      const location = keys.indexOf(active);
      const nextIndex = location === keys.length - 1 ? 0 : location + 1;
      setActive(keys[nextIndex]);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [active, keys]);

  return (
    <div className={styles.slider}>
      <LeftBackgroundShape className={styles.leftBackgroundShape} />
      <RightBackgroundShape className={styles.rightBackgroundShape} />

      <SlideNavigationItemList setActive={setActive} active={active} />
      <SlideContent
        params={{
          title: active,
          description: content[active].description,
          image: content[active].image,
          isPatternUp: content[active].patternUp,
        }}
      />
    </div>
  );
};

export default Slider;
