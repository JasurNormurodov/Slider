import PropTypes from 'prop-types';
import React from 'react';

import * as styles from './slide-navigation-item.module.scss';

const SlideNavigationItem = ({ params }) => {
  const { title, icon, iconActive, style, isActive, setActive } = params;
  return (
    <div className={styles.sliderNavigationItem}>
      <h4
        role="presentation"
        onClick={(event) => {
          setActive(event.target.textContent);
        }}
      >
        {title}
      </h4>
      <div>
        <div className={isActive ? styles.iconWrapperActive : styles.iconWrapper}>
          <img
            style={style}
            alt={title}
            className={styles.icon}
            src={isActive ? iconActive : icon}
          />
          {isActive && (
            <svg>
              <circle cx="38" cy="38" r="35" />
            </svg>
          )}
          <div
            data-item={title}
            role="presentation"
            className={styles.clickHandler}
            onClick={(event) => {
              setActive(event.target.dataset.item);
            }}
          />
        </div>
      </div>
    </div>
  );
};

SlideNavigationItem.propTypes = {
  params: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconActive: PropTypes.string.isRequired,
    style: PropTypes.objectOf(PropTypes.string),
    active: PropTypes.string,
    setActive: PropTypes.func,
    isActive: PropTypes.bool.isRequired,
  }).isRequired,
};

export default SlideNavigationItem;
