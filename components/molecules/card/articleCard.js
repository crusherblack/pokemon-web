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
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="160"
          image="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="Contemplative Reptile"
        />
        <CardContent>
          <div className={styles.cardTitleContainer}>
            <Typography
              gutterBottom
              variant="h6"
              component="h3"
              className={styles.cardTitle}
            >
              Apakah Deno akan menggantikan Node.js? Temukan Jawabannya disini
            </Typography>
            <div className={styles.cardDescription}>
              <Typography>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TutorialCardComponent;
