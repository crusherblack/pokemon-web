import React from "react";
import styles from "../../../styles/landing/NewestTutorial.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
import Grid from "@material-ui/core/Grid";

import Card from "../../../components/molecules/card/tutorialCard";

const NewestTutorialComponent = () => {
  return (
    <div className={styles.newestTutorialContainer}>
      <div className={styles.newestTutorialTitleContainer}>
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <h1 className={styles.newestTutorialTitle}>Tutorial Terbaru</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <p className={styles.newestTutorialDescription}>
            Temukan tutorial terbaru yang ingin kamu pelajari disini
          </p>
        </ScrollAnimation>
      </div>
      <Grid container spacing={6} className={styles.cardListContainer}>
        {[...Array(8)].map((item, index) => (
          <Grid container item sm={6} md={4} lg={4} xs={12} key={index}>
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={70 * index}
              duration={0.7}
              animateOnce
            >
              <Card styles={styles} />
            </ScrollAnimation>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default NewestTutorialComponent;
