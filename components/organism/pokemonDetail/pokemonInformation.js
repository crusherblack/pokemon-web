import FitnessCenter from "@material-ui/icons/FitnessCenter";
import Height from "@material-ui/icons/Height";
import IconButton from "@material-ui/core/IconButton";
import Image from "next/image";
import Chip from "@material-ui/core/Chip";
import PropTypes from "prop-types";

const PokemonInformationComponent = ({
  state,
  pokemon,
  setIsOpen,
  setIsVisible,
}) => {
  return (
    <section className="info-pokemon-container">
      <section>
        <section className="info-container">
          {state.currentImage && (
            <IconButton onClick={() => setIsVisible(true)}>
              <div className="avatar">
                <Image
                  src={state.currentImage}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
            </IconButton>
          )}
          <section className="info">
            <h1 className="text-capitalize">{pokemon.name}</h1>
            <div className="height-width-container">
              <div className="height-width">
                <Height fontSize="small" />
                <h5 className="text-capitalize">{pokemon.height} Inch</h5>
              </div>
              <div className="height-width">
                <FitnessCenter fontSize="small" />
                <h5 className="text-capitalize">{pokemon.weight} Kg</h5>
              </div>
            </div>
            <div className="type">
              {pokemon.types.map((type, index) => (
                <Chip
                  label={type.type.name}
                  variant="outlined"
                  size="small"
                  key={index}
                />
              ))}
            </div>
          </section>
        </section>
      </section>
      <section className="pokeball-container">
        <IconButton onClick={() => setIsOpen(true)}>
          <img src="/images/pokebal.png" alt="catchMe!!!" className="avatar" />
        </IconButton>
      </section>
    </section>
  );
};

PokemonInformationComponent.propTypes = {
  state: PropTypes.object.isRequired,
  pokemon: PropTypes.object.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};

export default PokemonInformationComponent;
