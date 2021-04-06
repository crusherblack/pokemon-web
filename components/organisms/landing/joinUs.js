import React from "react";
import styles from "../../../styles/landing/JoinUs.module.scss";
import Button from "@material-ui/core/Button";

const JoinUsComponent = () => {
  return (
    <div className={styles.joinUsContainer}>
      <h1>Ingin Belajar Bersama? Gabung Komunitas</h1>
      <Button
        variant="contained"
        className={[styles.btn, styles.btnPrimary].join(" ")}
        disableElevation={true}
      >
        Join Sekarang
      </Button>
    </div>
  );
};

export default JoinUsComponent;
