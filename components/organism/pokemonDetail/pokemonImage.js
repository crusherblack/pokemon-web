import { memo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import SmallImage from "@/components/atoms/image/small";

const PokemonImageComponent = ({
  currentAvatar,
  pokemon,
  setCurrentAvatar,
}) => {
  return (
    <div className="modal-content">
      <div className="picture-container">
        <Image
          src={currentAvatar}
          alt={currentAvatar}
          width={100}
          height={100}
          layout="responsive"
        />
      </div>
      <div className="picture-small">
        <SmallImage
          value={pokemon.sprites.front_default}
          onClick={() => setCurrentAvatar(pokemon.sprites.front_default)}
        />
        <SmallImage
          value={pokemon.sprites.back_default}
          onClick={() => setCurrentAvatar(pokemon.sprites.back_default)}
        />
        <SmallImage
          value={pokemon.sprites.front_shiny}
          onClick={() => setCurrentAvatar(pokemon.sprites.front_shiny)}
        />
        <SmallImage
          value={pokemon.sprites.back_shiny}
          onClick={() => setCurrentAvatar(pokemon.sprites.back_shiny)}
        />
      </div>
    </div>
  );
};

PokemonImageComponent.propTypes = {
  currentAvatar: PropTypes.string.isRequired,
  pokemon: PropTypes.object.isRequired,
  setCurrentAvatar: PropTypes.func.isRequired,
};

export default memo(PokemonImageComponent);
