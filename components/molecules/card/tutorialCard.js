import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const TutorialCardComponent = ({ styles }) => {
  return (
    <Card className={styles.cardContainer} elevation={0}>
      <CardActionArea>
        <img
          alt="Contemplative Reptile"
          src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h4"
            noWrap
            className={styles.cardDate}
          >
            Laravel, Vue
          </Typography>
          <div className={styles.cardTitleContainer}>
            <Typography
              gutterBottom
              variant="h6"
              component="h4"
              className={styles.cardTitle}
            >
              Belajar Laravel 8 CRUD Livewire Dari 0
            </Typography>
          </div>

          <div className={styles.cardDescription}>
            <Typography>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.cardActionContainer}>
        <div size="small" color="primary" className={styles.cardActionButton}>
          <ChevronRightIcon />
        </div>
      </CardActions>
    </Card>
  );
};

export default TutorialCardComponent;
