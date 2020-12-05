import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import SlideNavigationItem from '../slide-navigation-item/index';

import * as styles from './slide-navigation-item-list.scss';

// import capacityActive from './images/capacity-active.png';
// import capacity from './images/capacity.png';
// import communicationActive from './images/communication-active.png';
// import communication from './images/communication.png';
// import managementActive from './images/management-active.png';
// import management from './images/management.png';
// import scheduleActive from './images/schedule-active.png';
// import schedule from './images/schedule.png';

export default ({ active }) => {
  const data = useStaticQuery(
    graphql`
      query NavigationItemsList {
        allFile(
          filter: {
            relativePath: {}
            name: {}
            absolutePath: { regex: "/slide-navigation-item-list/images/" }
          }
          sort: { order: ASC, fields: base }
        ) {
          edges {
            node {
              id
              base
              childImageSharp {
                fixed(width: 30, height: 30) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `
  );
  const iconsArray = data.allFile.edges;
  console.log(iconsArray);
  const NAVIGATION_ITEMS = [
    { title: 'Capacity planning', iconActive: iconsArray[0], icon: iconsArray[1] },
    { title: 'Staggered schedules', iconActive: iconsArray[6], icon: iconsArray[7] },
    { title: 'PPE management', iconActive: iconsArray[4], icon: iconsArray[5] },
    { title: 'Employee communication', iconActive: iconsArray[2], icon: iconsArray[3] },
  ];
  const navigationItems = NAVIGATION_ITEMS.map((item) => {
    const isIconActive = item.title === active;
    const icon = isIconActive ? item.iconActive.node : item.icon.node;
    console.log(item.title, active);

    return (
      <SlideNavigationItem key={icon.id} title={item.title}>
        <Img
          // className={isIconActive ? styles.iconWrapperActive : styles.iconWrapper}
          className={{
            position: 'absolute',
            top: '4.17%',
            right: '4.17%',
            bottom: '4.17%',
            left: '4.17%',
            width: '66px',
            height: '66px',
            background: '$color-secondary',
            border: '3px solid #5c5c8a',
            borderRadius: '50%',
          }}
          fixed={icon.childImageSharp.fixed}
        />
      </SlideNavigationItem>
    );
  });

  return <>{navigationItems}</>;
};
