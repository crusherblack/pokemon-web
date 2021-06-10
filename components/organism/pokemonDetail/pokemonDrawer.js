import { memo } from "react";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";

const PokemonDrawerComponent = ({ state, letsCatchPokemon }) => {
  return (
    <div className="game-container">
      <div className="pokeball-count">
        <img src="/images/pokebal.webp" className="mr-1 poke-count" />
        <h3>{state.pokeball} Left</h3>
      </div>
      <h1 className="text-center font-weight-bold ">Catch Me !!!</h1>
      <IconButton onClick={letsCatchPokemon}>
        <div className="stage">
          <img src="/images/pokebal.webp" className="box bounce-7" />
        </div>
      </IconButton>
    </div>
  );
};

PokemonDrawerComponent.propTypes = {
  state: PropTypes.object.isRequired,
  letsCatchPokemon: PropTypes.func.isRequired,
};

export default memo(PokemonDrawerComponent);
