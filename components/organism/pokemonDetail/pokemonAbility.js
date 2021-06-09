import { memo } from "react";
import PropTypes from "prop-types";

const PokemonAbilityComponent = ({ pokemon }) => {
  return (
    <section className="abilities-container">
      <h4 className="text-capitalize">Abilities</h4>
      <div className="abilities-card-container">
        {pokemon.abilities.map((abilitiy, index) => (
          <div className="card" key={index}>
            <h4 className="text-capitalize">{abilitiy.ability.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

PokemonAbilityComponent.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default memo(PokemonAbilityComponent);
