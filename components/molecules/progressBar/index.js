import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import PropTypes from "prop-types";

const ProgressBarComponent = ({ stat, value }) => {
  const BorderLinearProgress = withStyles((theme) => {
    const backrounds = {
      hp: theme.palette.green.main,
      attack: theme.palette.red.main,
      defense: theme.palette.gray.main,
      "special-attack": theme.palette.violet.main,
      "special-defense": theme.palette.blue.main,
      speed: theme.palette.yellow.main,
    };

    return {
      root: {
        height: 10,
        borderRadius: 5,
      },
      colorPrimary: {
        backgroundColor:
          theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
      },
      bar: {
        borderRadius: 5,
        backgroundColor: backrounds[stat],
      },
    };
  })(LinearProgress);

  return (
    <BorderLinearProgress
      variant="determinate"
      value={value >= 100 ? 100 : value / 1.2}
    />
  );
};

ProgressBarComponent.propTypes = {
  stat: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default ProgressBarComponent;
