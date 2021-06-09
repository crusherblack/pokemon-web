import { useContext, useState } from "react";
import Image from "next/image";
import Remove from "@material-ui/icons/RemoveCircle";
import Button from "@material-ui/core/Button";
import Modal from "@/components/molecules/modal";

import { PokemonContext } from "@/context/pokemonContext";
import Router from "next/router";

const MyPokemonComponent = () => {
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
    <>
      <div className="my-info-container">
        <h1 className="text-title">My Info</h1>
        <h3>Name: {state.name}</h3>
        <h3>Gender: {state.gender}</h3>
        <h3>
          Total Own Pokemon:
          {state.catchedPokemons.length}
        </h3>
        <div className="pokeball-count">
          <img src="/images/pokebal.png" className="poke-count" />
          <h3>{state.pokeball} Left</h3>
        </div>
      </div>
      <div className="my-pokemon-container">
        <h1 className="text-title">My Pokemon's</h1>
        <div>
          {state.catchedPokemons.length > 0 &&
            state.catchedPokemons.map(
              (pokemon) =>
                pokemon.image && (
                  <div className="card" key={pokemon.id}>
                    <div
                      className="card-info"
                      onClick={() =>
                        navigateToPokemon(pokemon.name, pokemon.image)
                      }
                    >
                      <div className="img">
                        <Image
                          src={pokemon.image}
                          alt={pokemon.name}
                          width={100}
                          height={100}
                          layout="responsive"
                        />
                      </div>
                      <div className="info">
                        <h3 className="text-capitalize">
                          {pokemon.pokemonName}
                        </h3>
                        <h3 className="text-capitalize">
                          Origin: {pokemon.name}
                        </h3>
                      </div>
                    </div>
                    <div>
                      <Button
                        onClick={() => removePokemon(pokemon.id, pokemon.qty)}
                      >
                        <Remove />
                      </Button>
                    </div>
                  </div>
                )
            )}
        </div>
        {state.catchedPokemons.length <= 0 && (
          <div className="empty-pokemon-container">
            <img src="/images/empty.png" alt="empty" />
            <Button
              onClick={() => Router.push("/pokemon")}
              className="home-button"
            >
              Let's Catch
            </Button>
          </div>
        )}
        <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
          <div className="result-container">
            <img src="/images/pokebollremove.png" alt="catch" />
            <h2 className="text-center font-weight-bold text-danger">
              Pokemon Released
            </h2>
            <h2 className="text-center font-weight-bold text-success">
              Get +1 Pokeball
            </h2>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default MyPokemonComponent;
