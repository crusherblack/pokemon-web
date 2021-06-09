import { memo } from "react";
import ProgressBar from "@/components/molecules/progressBar";
import PropTypes from "prop-types";

const PokemonStatComponent = ({ pokemon }) => {
  return (
    <section className="detail-container">
      <h4 className="text-capitalize">Base Stats</h4>
      <div className="stat">
        {pokemon.stats.map((stat, index) => (
          <div key={stat.stat.name}>
            <h5>{stat.stat.name}</h5>
            <ProgressBar
              colorPrimary="red"
              colorSecondary="green"
              stat={stat.stat.name}
              value={stat.base_stat}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

PokemonStatComponent.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default memo(PokemonStatComponent);
