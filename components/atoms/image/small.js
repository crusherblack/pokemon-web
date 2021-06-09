import PropTypes from "prop-types";

const SmallImageComponent = ({ value, ...rest }) => {
  return <img {...rest} src={value} alt={value} className="child" />;
};

SmallImageComponent.propTypes = {
  value: PropTypes.string.isRequired,
  rest: PropTypes.object.isRequired,
};

export default SmallImageComponent;
