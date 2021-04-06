import React from "react";
import styles from "../../../styles/landing/NewestTutorial.module.scss";
import Grid from "@material-ui/core/Grid";
import Card from "../../../components/molecules/card/tutorialCard";

const NewestTutorialComponent = () => {
  return (
    <div className={styles.newestTutorialContainer}>
      <div className={styles.newestTutorialTitleContainer}>
        <h1 className={styles.newestTutorialTitle}>Tutorial Terbaru</h1>
        <p className={styles.newestTutorialDescription}>
          Temukan tutorial terbaru yang ingin kamu pelajari disini
        </p>
      </div>
      <Grid container spacing={6} className={styles.cardListContainer}>
        {[...Array(8)].map((item, index) => (
          <Grid container item sm={6} md={4} lg={3} xs={12} key={index}>
            <Card styles={styles} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default NewestTutorialComponent;
