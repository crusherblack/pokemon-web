import { useContext, useState, useEffect } from "react";
import Layout from "@/components/templates/layout";
import { client } from "@/utils/apollo/client";
import Image from "next/image";
import Chip from "@material-ui/core/Chip";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Modal from "@/components/molecules/modal";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import * as yup from "yup";

import FitnessCenter from "@material-ui/icons/FitnessCenter";
import Height from "@material-ui/icons/Height";

import { GET_POKEMON } from "@/utils/apollo/constant";
import { PokemonContext } from "@/context/pokemonContext";
import ProgressBar from "@/components/molecules/progressBar";

const validationSchema = yup.object({
  pokemonName: yup
    .string("Enter your Pokemon name")
    .min(2, "Name should be of minimum 2 characters length")
    .required("Pokemon name is required"),
});

const PokemonDetailPage = ({ pokemon }) => {
  const [state, dispatch] = useContext(PokemonContext);
  const [pokemonName, setPokemonName] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isResult, setIsResult] = useState(false);
  const [isCatch, setIsCatch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState(false);
  const [isPokeballZero, setIsPokeballZero] = useState(false);
  const [currentAvatar, setCurrentAvatar] = useState(
    pokemon.sprites.front_default
  );

  const formik = useFormik({
    initialValues: {
      pokemonName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch({
        type: "ADD_POKEMON",
        payload: {
          pokemon: {
            ...pokemon,
            image: state.currentImage,
            pokemonName: values.pokemonName,
          },
        },
      });
      setIsResult(false);
      setInfo(true);
      setPokemonName("");
    },
  });

  const letsCatchPokemon = () => {
    if (state.pokeball > 0) {
      const result = Math.random() < 0.5;
      if (result) {
        dispatch({
          type: "CATCH",
        });
        setIsCatch(true);
      } else {
        dispatch({
          type: "CATCH",
        });
        setIsCatch(false);
      }
      setIsResult(true);
    } else {
      setIsResult(true);
      setIsPokeballZero(true);
    }
  };

  const addPokeBall = () => {
    dispatch({
      type: "ADD_POKEBALL",
      payload: {
        pokeball: 10,
      },
    });
    setIsPokeballZero(false);
  };

  const closeInfo = () => {
    setInfo(false);
  };

  return (
    <Layout withContainer>
      <section className="detail-pokemon-container">
        <section className="info-pokemon-container">
          <section>
            <section className="info-container">
              {state.currentImage && (
                <Button onClick={() => setIsVisible(true)}>
                  <div className="avatar">
                    <Image
                      src={state.currentImage}
                      alt={pokemon.name}
                      width={100}
                      height={100}
                      layout="responsive"
                    />
                  </div>
                </Button>
              )}
              <section className="info">
                <h1 className="text-capitalize">{pokemon.name}</h1>
                <div className="height-width-container">
                  <div className="height-width">
                    <Height fontSize="small" />
                    <h5 className="text-capitalize">{pokemon.height} Inch</h5>
                  </div>
                  <div className="height-width">
                    <FitnessCenter fontSize="small" />
                    <h5 className="text-capitalize">{pokemon.weight} Kg</h5>
                  </div>
                </div>
                <div className="type">
                  {pokemon.types.map((type, index) => (
                    <Chip
                      label={type.type.name}
                      variant="outlined"
                      size="small"
                      key={index}
                    />
                  ))}
                </div>
              </section>
            </section>
          </section>
          <section className="pokeball-container">
            <Button onClick={() => setIsOpen(true)}>
              <img
                src="/images/pokebal.png"
                alt="catchMe!!!"
                className="avatar"
              />
            </Button>
          </section>
        </section>
        <section className="detail-container">
          <h4 className="text-capitalize">Base Stats</h4>
          <div className="stat">
            {pokemon.stats.map((stat, index) => (
              <div key={stat.stat.name}>
                <h5>{stat.stat.name}</h5>
                <ProgressBar
                  colorPrimary="red"
                  colorSecondary="green"
                  stat={stat.stat.name}
                  value={stat.base_stat}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="abilities-container">
          <h4 className="text-capitalize">Abilities</h4>
          <div className="abilities-card-container">
            {pokemon.abilities.map((abilitiy, index) => (
              <div className="card" key={index}>
                <h4 className="text-capitalize">{abilitiy.ability.name}</h4>
              </div>
            ))}
          </div>
        </section>
        <section className="moves-container">
          <Accordion elevation={0} className="abilities-container">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h4 className="text-capitalize">Moves</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                {pokemon.moves.map((move, index) => (
                  <Chip
                    label={move.move.name}
                    variant="default"
                    size="small"
                    key={index}
                    style={{
                      marginRight: "5px",
                      marginBottom: "5px",
                    }}
                  />
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </section>
        <Modal
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          title={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        >
          <div className="modal-content">
            <div className="picture-container">
              <Image
                src={currentAvatar}
                alt={currentAvatar}
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
            <div className="picture-small">
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.sprites.front_default}
                className="child"
                onClick={() => setCurrentAvatar(pokemon.sprites.front_default)}
              />
              <img
                src={pokemon.sprites.back_default}
                alt={pokemon.sprites.back_default}
                className="child"
                onClick={() => setCurrentAvatar(pokemon.sprites.back_default)}
              />

              <img
                src={pokemon.sprites.front_shiny}
                alt={pokemon.sprites.front_shiny}
                className="child"
                onClick={() => setCurrentAvatar(pokemon.sprites.front_shiny)}
              />
              <img
                src={pokemon.sprites.back_shiny}
                alt={pokemon.sprites.back_shiny}
                className="child"
                onClick={() => setCurrentAvatar(pokemon.sprites.back_shiny)}
              />
            </div>
          </div>
        </Modal>
        <Modal isVisible={isResult} setIsVisible={setIsResult}>
          {isPokeballZero ? (
            <div className="result-container">
              <img src="/images/zeropokeball.png" alt="zero" />
              <h2 className="text-center font-weight-bold text-danger ">
                You Are Run Out Of Pokeball
              </h2>
              <h2
                className="text-center font-weight-bold text-success"
                onClick={addPokeBall}
              >
                <a href="https://www.youtube.com/c/tahucoding" target="_blank">
                  Still want more? Subscribe Tahu Coding
                </a>
              </h2>
            </div>
          ) : isCatch ? (
            <>
              <div className="result-container">
                <img src="/images/catch.png" alt="catch" />
                <h2 className="text-center font-weight-bold ">Success Catch</h2>
              </div>
              <div>
                <form onSubmit={formik.handleSubmit}>
                  <TextField
                    id="outlined-basic"
                    label="Give Your Pokemon's Name"
                    variant="outlined"
                    color="secondary"
                    name="pokemonName"
                    className="input"
                    value={formik.values.pokemonName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.pokemonName &&
                      Boolean(formik.errors.pokemonName)
                    }
                    helperText={
                      formik.touched.pokemonName && formik.errors.pokemonName
                    }
                  />
                  <Button
                    type="submit"
                    className="home-button"
                    style={{
                      width: "100%",
                      marginTop: "15px",
                    }}
                  >
                    Addopt Pokemon
                  </Button>
                </form>
              </div>
            </>
          ) : (
            <div
              className="result-container"
              onClick={() => setIsResult(false)}
            >
              <img src="/images/notcatch.jpg" alt="fail" />
              <h2 className="text-center font-weight-bold ">Fail To Catch</h2>
            </div>
          )}
        </Modal>
        <Modal isVisible={info} setIsVisible={setInfo}>
          <div className="success-catched-container" onClick={closeInfo}>
            <div className="picture-container">
              <Image
                src={currentAvatar}
                alt={currentAvatar}
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
            <h2 className="text-success">Success</h2>
            <h2>Hey from {pokemonName}</h2>
          </div>
        </Modal>
        <Drawer
          anchor="bottom"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="drawer"
        >
          <div className="game-container">
            <div className="pokeball-count">
              <img src="/images/pokebal.png" className="poke-count" />
              <h3>{state.pokeball} Left</h3>
            </div>
            <h1 className="text-center font-weight-bold ">Catch Me !!!</h1>
            <Button onClick={letsCatchPokemon}>
              <div className="stage">
                <img src="/images/pokebal.png" className="box bounce-7" />
              </div>
            </Button>
          </div>
        </Drawer>
      </section>
    </Layout>
  );
};

export const getServerSideProps = async (ctx) => {
  const name = ctx.query.name;
  const { data } = await client.query({
    query: GET_POKEMON,
    variables: {
      name,
    },
  });

  return { props: { pokemon: data.pokemon } };
};

export default PokemonDetailPage;
