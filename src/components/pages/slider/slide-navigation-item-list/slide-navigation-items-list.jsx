import React from 'react';

import SlideNavigationItem from '../slide-navigation-item/index';

import capacityActive from './images/capacity-active.png';
import capacity from './images/capacity.png';
import communicationActive from './images/communication-active.png';
import communication from './images/communication.png';
import managementActive from './images/management-active.png';
import management from './images/management.png';
import scheduleActive from './images/schedule-active.png';
import schedule from './images/schedule.png';

const NAVIGATION_ITEMS = [
  { title: 'Capacity planning', icon: capacity, iconActive: capacityActive },
  { title: 'Staggered schedules', icon: schedule, iconActive: scheduleActive },
  { title: 'PPE management', icon: management, iconActive: managementActive },
  { title: 'Employee communication', icon: communication, iconActive: communicationActive },
];

export default ({ active }) => {
  const navigationItemsList = NAVIGATION_ITEMS.map((item) => {
    if (active === item.title) {
      return (
        <SlideNavigationItem key={item.title} title={item.title}>
          <image src={item.iconActive} />
        </SlideNavigationItem>
      );
    }
    return (
      <SlideNavigationItem key={item.title} title={item.title}>
        <image src={item.icon} />
      </SlideNavigationItem>
    );
  });
  return <>{navigationItemsList}</>;
};
