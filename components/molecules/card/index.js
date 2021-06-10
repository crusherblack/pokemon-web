import { useContext, memo } from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Image from "next/image";
import Router from "next/router";
import PropTypes from "prop-types";

import { PokemonContext } from "@/context/pokemonContext";
import { capitalizedText } from "@/utils/index";

const CardComponent = ({ pokemon }) => {
  const [_s, dispatch] = useContext(PokemonContext);
  const { name, image } = pokemon;

  const navigateToPokemon = () => {
    //i don't find any image of pokemon's response from server so this is the workaround
    dispatch({
      type: "UPDATE_IMAGE",
      payload: { image },
    });

    Router.push("/pokemon/[name]", `/pokemon/${name}`);
  };

  return (
    <Card elevation={0} className="card" onClick={navigateToPokemon}>
      <CardActionArea>
        <CardContent>
          <Image
            src={image}
            alt={name}
            width={400}
            height={250}
            layout="responsive"
            className="img"
          />
          <h3 className="text-center">{capitalizedText(name)}</h3>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CardComponent.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default memo(CardComponent);
