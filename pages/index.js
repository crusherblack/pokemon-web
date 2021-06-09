import { useContext } from "react";

import Router from "next/router";
import { PokemonContext } from "@/context/pokemonContext";
import Button from "@/components/atoms/button"; // coba pake emotion styled, enak juga

export default function Index() {
  const [state, dispatch] = useContext(PokemonContext);

  const startGame = () => {
    dispatch({
      type: "ADD_POKEBALL",
      payload: { pokeball: state.pokeball ? state.pokeball : 100 },
    });

    Router.push("/pokemon");
  };

  return (
    <div className="home-content">
      <div className="logo-container-home">
        <img src="/images/pokemon.png" alt="logo" />
      </div>
      <Button onClick={startGame}>Let's Begin</Button>
    </div>
  );
}
