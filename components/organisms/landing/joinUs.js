import React from "react";
import styles from "../../../styles/landing/JoinUs.module.scss";
import Button from "@material-ui/core/Button";
import ScrollAnimation from "react-animate-on-scroll";

const JoinUsComponent = () => {
  return (
    <div className={styles.joinUsContainer}>
      <ScrollAnimation animateIn="bounceIn" animateOnce>
        <h1>Ingin Belajar Bersama? Gabung Komunitas</h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <Button
          variant="contained"
          className={[styles.btn, styles.btnPrimary].join(" ")}
          disableElevation={true}
        >
          Join Sekarang
        </Button>
      </ScrollAnimation>
    </div>
  );
};

export default JoinUsComponent;
