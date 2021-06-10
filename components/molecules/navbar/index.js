import { useContext } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import Badge from "@material-ui/core/Badge";
import Router from "next/router";

import { PokemonContext } from "@/context/pokemonContext";

const NavbarComponent = () => {
  const [state, _d] = useContext(PokemonContext);

  return (
    <AppBar position="static" className="navbar" elevation={0}>
      <Toolbar className="toolbar">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => Router.back()}
        >
          <KeyboardArrowLeft />
        </IconButton>

        <IconButton onClick={() => Router.push("/pokemon")}>
          <div className="logo-container">
            <img src="/images/pokemon.webp" alt="logo" />
          </div>
        </IconButton>

        <IconButton onClick={() => Router.push("/my-pokemon")}>
          <Badge
            showZero
            badgeContent={state.catchedPokemons.length}
            color="secondary"
          >
            <img
              src="/images/bag.webp"
              alt="my-bag"
              style={{
                width: "30px",
                height: "30px",
                marginRight: "-10px",
              }}
            />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarComponent;
