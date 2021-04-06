import React from "react";
import styles from "../../../styles/landing/Article.module.scss";
import Card from "../../molecules/card/articleCard";
import Grid from "@material-ui/core/Grid";

const article = () => {
  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleTitleContainer}>
        <h1 className={styles.articleTutorialTitle}>Artikel Terbaru</h1>
        <p className={styles.articleTutorialDescription}>
          Baca Tutorial Kekinian Seputar Dunia Pemograman
        </p>
      </div>
      <Grid container spacing={6} className={styles.cardListContainer}>
        {[...Array(3)].map((item, index) => (
          <Grid container item sm={6} md={6} lg={4} xs={12} key={index}>
            <Card styles={styles} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default article;
