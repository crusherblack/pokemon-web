import { useContext, useState } from "react";

import { PokemonContext } from "@/context/pokemonContext";
import Layout from "@/components/templates/layout";
import MyPokemon from "@/components/organism/myPokemon";
import Router from "next/router";

const MyPokemonPage = () => {
  const [state, dispatch] = useContext(PokemonContext);
  const [isVisible, setIsVisible] = useState(false);

  const navigateToPokemon = (name, image) => {
    //gak nemu response gambar jadi terpaksa taro di global store / context
    dispatch({
      type: "UPDATE_IMAGE",
      payload: { image },
    });

    Router.push("/pokemon/[name]", `/pokemon/${name}`);
  };

  const removePokemon = (id, qty) => {
    dispatch({
      type: "REMOVE_POKEMON",
      payload: {
        pokemon: {
          id,
          qty,
        },
      },
    });
    setIsVisible(true);
  };

  return (
    <Layout withContainer title="My Pokemon's">
      <MyPokemon
        state={state}
        isVisible={isVisible}
        navigateToPokemon={navigateToPokemon}
        removePokemon={removePokemon}
        setIsVisible={setIsVisible}
      />
    </Layout>
  );
};

export default MyPokemonPage;
