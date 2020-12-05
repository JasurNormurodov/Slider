import PropTypes from 'prop-types';
import React from 'react';

import Header from 'components/shared/header';

const MainLayout = ({ children }) => (
  <>
    <main>{children}</main>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
