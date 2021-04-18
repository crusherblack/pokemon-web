import React from "react";
import styles from "../../../styles/landing/Article.module.scss";
import Card from "../../molecules/card/articleCard";
import Grid from "@material-ui/core/Grid";
import ScrollAnimation from "react-animate-on-scroll";

const article = () => {
  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleTitleContainer}>
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <h1 className={styles.articleTutorialTitle}>Artikel Terbaru</h1>
          <p className={styles.articleTutorialDescription}>
            Baca Tutorial Kekinian Seputar Dunia Pemograman
          </p>
        </ScrollAnimation>
      </div>
      <Grid container spacing={6} className={styles.cardListContainer}>
        {[...Array(3)].map((item, index) => (
          <Grid container item sm={6} md={6} lg={4} xs={12} key={index}>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOnce
              delay={70 * index}
            >
              <Card styles={styles} />
            </ScrollAnimation>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default article;
