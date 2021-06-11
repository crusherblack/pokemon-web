import {
  render,
  waitForElement,
  configure,
  screen,
} from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import PokemonList from "../../pages/pokemon/index";
import { GET_POKEMONS } from "@/utils/apollo/constant";
import { PokemonContextProvider } from "@/context/pokemonContext";
import { act } from "react-dom/test-utils";

import { pokemons } from "@/utils/mockData";

const mocks = [
  {
    request: {
      query: GET_POKEMONS,
      variables: {
        limit: 2,
        offset: 0,
      },
    },
    result: { ...pokemons },
  },
];

beforeEach(() => {
  configure({
    throwSuggestions: true,
  });
  process.env.NODE_ENV = "production";
});

afterEach(() => {
  process.env.NODE_ENV = "test";
});

describe("Testing Get Response From GraphQL", () => {
  it("renders without error", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PokemonContextProvider>
          <PokemonList />
        </PokemonContextProvider>
      </MockedProvider>
    );

    await act(async () => {
      const result = await waitForElement(
        () => screen.getAllByRole("heading").length
      );

      expect(result).toBe(2);
    });
  });
});
