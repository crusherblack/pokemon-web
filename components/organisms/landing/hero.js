import React from "react";
import Input from "@material-ui/core/Input";
import ScrollAnimation from "react-animate-on-scroll";
import SearchIcon from "@material-ui/icons/Search";

import styles from "../../../styles/landing/Hero.module.scss";

const HeroComponent = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContentContainer}>
        <div className={styles.backroundImage}></div>
        <div
          style={{
            zIndex: 10,
          }}
        >
          <ScrollAnimation animateIn="bounce" animateOnce>
            <h1 className={styles.heroTextTitle}>Mulai Sekarang</h1>
            <h1 className={styles.heroTextTitle}>Temukan Tutorial Terbaik</h1>
            <h3 className={styles.heroTextSmall}>
              Javascript, Laravel, React.js, Vue.js, dll
            </h3>
          </ScrollAnimation>
        </div>

        <Input
          className={styles.heroInput}
          id="input-with-icon-adornment"
          placeholder="Cari tutorial yang kamu inginkan disini"
          disableUnderline
          endAdornment={
            <div className={styles.heroInputPrefix}>
              <SearchIcon
                style={{
                  color: "white",
                }}
              />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default HeroComponent;
