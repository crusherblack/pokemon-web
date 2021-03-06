import { useContext } from "react";

import Router from "next/router";
import Head from "next/head";

import Button from "@/components/atoms/button/index";
import Layout from "@/components/templates/homeLayout";

import { PokemonContext } from "@/context/pokemonContext";

const HomePage = () => {
  const [state, dispatch] = useContext(PokemonContext);

  const startGame = () => {
    dispatch({
      type: "ADD_POKEBALL",
      payload: { pokeball: state.pokeball ? state.pokeball : 100 },
    });

    Router.push("/pokemon");
  };

  const navigateToAmp = () => {
    window.location = "/home-amp";
  };

  return (
    <>
      <Head>
        <title>Welcome To Pokemon Game Page</title>
      </Head>
      <Layout>
        <div className="logo-container-home">
          <img src="/images/pokemon.webp" alt="logo" />
        </div>
        <Button onClick={startGame} className="mt-3">
          Let's Begin
        </Button>
        <Button onClick={navigateToAmp} className="mt-3">
          Switch To AMP
        </Button>
      </Layout>
    </>
  );
};

export default HomePage;
