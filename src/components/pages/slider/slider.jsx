import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { node } from 'prop-types';
import React from 'react';

// import leftBackgroundShape from './images/left-background-shape.png';
// import rightBackgroundShape from './images/right-background-shape.png';
import SlideNavigationItemList from './slide-navigation-item-list';
import * as styles from './slider.module.scss';

const Slider = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allFile(filter: { relativePath: {}, name: { regex: "/(background-shape)/" } }) {
          edges {
            node {
              id
              base
              childImageSharp {
                fixed(height: 630) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `
  );

  const [leftBackgroundShape, rightBackgroundShape] = data.allFile.edges;
  return (
    <div className={styles.slider}>
      <SlideNavigationItemList active="Capacity planning" />

      <Img
        className={styles.leftBackgroundShape}
        fixed={leftBackgroundShape.node.childImageSharp.fixed}
      />
      <Img
        className={styles.rightBackgroundShape}
        fixed={rightBackgroundShape.node.childImageSharp.fixed}
      />
    </div>
  );
};

export default Slider;
