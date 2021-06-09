import Image from "next/image";
import PropTypes from "prop-types";

const PokemonInfoComponent = ({ closeInfo, currentAvatar, pokemonName }) => {
  return (
    <div className="success-catched-container" onClick={closeInfo}>
      <div className="picture-container">
        <Image
          src={currentAvatar}
          alt={currentAvatar}
          width={100}
          height={100}
          layout="responsive"
        />
      </div>
      <h2 className="text-success">Success</h2>
      <h2>Hey from {pokemonName}</h2>
    </div>
  );
};

PokemonInfoComponent.propTypes = {
  closeInfo: PropTypes.func.isRequired,
  currentAvatar: PropTypes.string.isRequired,
  pokemonName: PropTypes.string.isRequired,
};

export default PokemonInfoComponent;
