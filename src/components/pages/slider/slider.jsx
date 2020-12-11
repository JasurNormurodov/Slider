import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { useState, useEffect } from 'react';

// import ProgressRing from './progress-ring/progress-ring';

import leftBackgroundShape from '../../../images/pages/background/left-background-shape.svg';
import rightBackgroundShape from '../../../images/pages/background/right-background-shape.svg';
import capacityPanel from '../../../images/pages/panels/capacity-panel.svg';
import communicationPanel from '../../../images/pages/panels/communication-panel.svg';
import managementPanel from '../../../images/pages/panels/management-panel.svg';
import schedulesPanel from '../../../images/pages/panels/schedules-panel.svg';

import SlideContent from './slide-content';
import SlideNavigationItemList from './slide-navigation-item-list';
import * as styles from './slider.module.scss';

const content = {
  'Capacity planning': {
    description: `Set capacity limits and turn on alerts to limit access when the building reaches capacity.
  Ensure social distancing and avoid overcrowding.`,
    image: capacityPanel,
    patternUp: true,
  },
  'Staggered schedules': {
    description: `Create multiple user groups and assign staggered schedules to users.
   Deny access outside of a set schedule. Change and update schedules easily 
   that employees can check from the app.`,
    image: schedulesPanel,
    patternUp: false,
  },
  'PPE management': {
    description: `Keep track of all your critical PPE inventory. Prioritize and track PPE allocation to highest at-risk employees.`,
    image: managementPanel,
    patternUp: true,
  },
  'Employee communication': {
    description: `Send out timely announcements for COVID-19 health-related news and guidelines, directly in the app. Ensure employees update critical contacts in case
  of emergency.`,
    image: communicationPanel,
    patternUp: false,
  },
};

const Slider = () => {
  // const [activeIndex, setActiveIndex] = useState(0);
  const keys = Object.keys(content);
  const [active, setActive] = useState(keys[0]);
  console.log(active);

  useEffect(() => {
    const timer = setInterval(() => {
      const location = keys.indexOf(active);
      const nextIndex = location === keys.length - 1 ? 0 : location + 1;
      setActive(keys[nextIndex]);
      console.log('In timer');
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [active, keys]);

  const data = useStaticQuery(
    graphql`
      query backgroundImages {
        allFile(
          sort: { order: ASC, fields: base }
          filter: { relativePath: { regex: "/(background)/" } }
        ) {
          edges {
            node {
              childImageSharp {
                fixed(height: 630) {
                  ...GatsbyImageSharpFixed
                }
                id
              }
            }
          }
        }
      }
    `
  );
  return (
    <div className={styles.slider}>
      <img alt="" className={styles.leftBackgroundShape} src={leftBackgroundShape} />
      <img alt="" className={styles.rightBackgroundShape} src={rightBackgroundShape} />
      <SlideNavigationItemList setActive={setActive} active={active} />
      <SlideContent
        params={{
          title: active,
          description: content[active].description,
          panel: content[active].image,
          isPatternUp: content[active].patternUp,
        }}
      />
    </div>
  );
};

export default Slider;
