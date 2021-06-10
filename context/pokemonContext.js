import { createContext, useReducer } from "react";

export const PokemonContext = createContext();

const initialState = {
  pokeball:
    process.browser && localStorage.getItem("pokeball")
      ? parseInt(localStorage.getItem("pokeball"))
      : 0,
  catchedPokemons:
    process.browser && localStorage.getItem("catchedPokemons")
      ? JSON.parse(localStorage.getItem("catchedPokemons"))
      : [],
  currentImage:
    process.browser && localStorage.getItem("currentImage")
      ? localStorage.getItem("currentImage")
      : "",
  name: "Fadhil Darma Putera Zagoto",
  gender: "Male",
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE_IMAGE":
      if (process.browser) {
        localStorage.setItem("currentImage", payload.image);
      }

      return {
        ...state,
        currentImage: payload.image,
      };
    case "CATCH":
      if (process.browser) {
        localStorage.setItem("pokeball", state.pokeball - 1);
      }

      return {
        ...state,
        pokeball: state.pokeball - 1,
      };
    case "ADD_POKEBALL":
      if (process.browser) {
        localStorage.setItem("pokeball", payload.pokeball);
      }

      return {
        ...state,
        pokeball: payload.pokeball,
      };
    case "ADD_POKEMON":
      const newCatchedPokemons = [
        ...state.catchedPokemons,
        {
          ...payload.pokemon,
          id:
            payload.pokemon.id +
            payload.pokemon.pokemonName +
            payload.pokemon.id,
        },
      ];

      if (process.browser) {
        localStorage.setItem(
          "catchedPokemons",
          JSON.stringify(newCatchedPokemons)
        );
      }

      return {
        ...state,
        catchedPokemons: newCatchedPokemons,
      };
    case "REMOVE_POKEMON":
      const filteredCatchedPokemon = state.catchedPokemons.filter(
        (pokemon) => pokemon.id !== action.payload.pokemon.id
      );

      if (process.browser) {
        localStorage.setItem(
          "catchedPokemons",
          JSON.stringify(filteredCatchedPokemon)
        );
        localStorage.setItem("pokeball", state.pokeball + 1);
      }

      return {
        ...state,
        catchedPokemons: filteredCatchedPokemon,
        pokeball: state.pokeball + 1,
      };
    default:
      throw new Error();
  }
};

export const PokemonContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PokemonContext.Provider value={[state, dispatch]}>
      {children}
    </PokemonContext.Provider>
  );
};
