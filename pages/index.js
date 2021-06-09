import { useContext } from "react";

import Button from "@material-ui/core/Button";
import Router from "next/router";
import { PokemonContext } from "@/context/pokemonContext";

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
      <Button onClick={startGame} className="home-button">
        Let's Begin
      </Button>
    </div>
  );
}
