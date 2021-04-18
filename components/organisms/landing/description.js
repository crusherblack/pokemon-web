import React from "react";
import styles from "../../../styles/landing/Description.module.scss";

import ScrollAnimation from "react-animate-on-scroll";
import Grid from "@material-ui/core/Grid";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PersonIcon from "@material-ui/icons/Person";
import AssignmentIcon from "@material-ui/icons/Assignment";
import CodeIcon from "@material-ui/icons/Code";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const cards = [
  {
    id: 1,
    title: "Video Tutorial",
    description:
      "Tidak hanya artikel dan tulisan, disini kamu juga dapat menemukan tutorial terkini dalam bentuk video",
    icon: <YouTubeIcon className={styles.customIcon} />,
  },
  {
    id: 2,
    title: "Belajar Mandiri",
    description:
      "Kamu bisa belajar mandiri dengan mengikuti tutorial-tutorial terbaik disini",
    icon: <PersonIcon className={styles.customIcon} />,
  },
  {
    id: 3,
    title: "Tutorial Terbaru",
    description:
      "Tutorial Javascript, Laravel, React.js, Vue.js terbaru dan terbaik setiap minggunya.",
    icon: <AssignmentIcon className={styles.customIcon} />,
  },
  {
    id: 4,
    title: "Source Code",
    description: "Jangan kawatir lagi setiap tutorial disertai source code",
    icon: <CodeIcon className={styles.customIcon} />,
  },
];

const CustomCard = ({ icon, title, description, backroundColor }) => (
  <div className={styles.descriptionCardContainer}>
    <div
      className={styles.customIconContainer}
      style={{
        backgroundColor: backroundColor,
      }}
    >
      {icon}
    </div>
    <h1>{title}</h1>
    <Typography className={styles.customIconDescription}>
      {description}
    </Typography>
  </div>
);

const DescriptionComponent = () => {
  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.descriptionLeftContainer}>
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <h1 className={styles.descriptionLeftTitle}>Belajar Sekarang</h1>
          <h1 className={styles.descriptionLeftTitle}>
            Coding itu menyenangkan
          </h1>
          <p className={styles.descriptionLeftText}>
            Dengan coding kamu dapat membangun apapun, membantu banyak orang dan
            memecahkan masalah disekitarmu.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <img
            className={styles.descriptionImg}
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fGxlYXJuaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="image-1"
          />
        </ScrollAnimation>
      </div>

      <div className={styles.descriptionRightContainer}>
        <Grid container>
          <Grid container item xs={12}>
            {cards.slice(0, 2).map((card) => (
              <Grid item md={6} xs={12} key={card.id}>
                <ScrollAnimation animateIn="fadeInDown" animateOnce>
                  <CustomCard
                    title={card.title}
                    description={card.description}
                    icon={card.icon}
                    backroundColor="#F1E4FF"
                  />
                </ScrollAnimation>
              </Grid>
            ))}
          </Grid>
          <Grid container item xs={12}>
            {cards.slice(2, 4).map((card) => (
              <Grid item md={6} xs={12} key={card.id}>
                <ScrollAnimation animateIn="fadeInDown" animateOnce>
                  <CustomCard
                    title={card.title}
                    description={card.description}
                    icon={card.icon}
                    backroundColor="#F1E4FF"
                  />
                </ScrollAnimation>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <ScrollAnimation animateIn="bounceInRight" animateOnce>
          <Button
            variant="contained"
            className={[styles.btn, styles.btnPrimary].join(" ")}
            disableElevation={true}
            style={{
              marginLeft: "10px",
            }}
          >
            Mulai Sekarang
          </Button>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default DescriptionComponent;
