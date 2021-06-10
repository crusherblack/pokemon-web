import { render, screen } from "@testing-library/react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { mount } from "enzyme";

import Home from "../index";
import { PokemonContextProvider } from "../../context/pokemonContext";

Enzyme.configure({ adapter: new Adapter() });

describe("Home component", () => {
  test("Cek apakah dia render pake enzyme", () => {
    const wrapper = mount(
      <PokemonContextProvider>
        <Home />
      </PokemonContextProvider>
    );
    const promise = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          wrapper.update();
          resolve(wrapper);
        }, 100);
      });
    };
    return promise().then((res) => {
      expect(res.contains("Let's Begin")).toEqual(true);
    });
  });

  test("Cek apakah dia render pake react-testing-library", async () => {
    render(
      <PokemonContextProvider>
        <Home />
      </PokemonContextProvider>
    );

    expect(screen.getByText("Let's Begin")).toBeInTheDocument();
  });
});
