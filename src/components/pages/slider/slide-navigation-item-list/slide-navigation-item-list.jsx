import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import capacityActive from '../../../../images/pages/navigation-icons/capacity-active.svg';
import capacity from '../../../../images/pages/navigation-icons/capacity.svg';
import communicationActive from '../../../../images/pages/navigation-icons/communication-active.svg';
import communication from '../../../../images/pages/navigation-icons/communication.svg';
import managementActive from '../../../../images/pages/navigation-icons/management-active.svg';
import management from '../../../../images/pages/navigation-icons/management.svg';
import scheduleActive from '../../../../images/pages/navigation-icons/schedule-active.svg';
import schedule from '../../../../images/pages/navigation-icons/schedule.svg';
import SlideNavigationItem from '../slide-navigation-item';

import * as styles from './slide-navigation-item-list.module.scss';

export default ({ active, setActive }) => {
  // const data = useStaticQuery(
  //   graphql`
  //     query navigationIcons {
  //       allFile(
  //         sort: { order: ASC, fields: base }
  //         filter: { relativePath: { regex: "/(navigation-icons)/" } }
  //       ) {
  //         edges {
  //           node {
  //             childImageSharp {
  //               fluid(maxWidth: 30) {
  //                 ...GatsbyImageSharpFluid_noBase64
  //               }
  //             }
  //             id
  //           }
  //         }
  //       }
  //     }
  //   `
  // );

  const navigationItemsArray = [
    { title: 'Capacity planning', icon: capacity, iconActive: capacityActive },
    { title: 'Staggered schedules', icon: schedule, iconActive: scheduleActive },
    { title: 'PPE management', icon: management, iconActive: managementActive },
    { title: 'Employee communication', icon: communication, iconActive: communicationActive },
  ];

  const navigationItems = navigationItemsArray.map((item) => (
    <SlideNavigationItem
      key={item.title}
      params={{
        title: item.title,
        icon: item.icon,
        iconActive: item.iconActive,
        isActive: active === item.title,
        setActive,
      }}
    />
  ));

  return <div className={styles.sliderNavigationItemList}>{navigationItems}</div>;
};
