import { useContext, useState } from "react";

const Drawer = dynamic(() => import("@material-ui/core/Drawer"), {
  ssr: false,
});
import { useFormik } from "formik";
import * as yup from "yup";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import("@/components/molecules/modal"));
const Layout = dynamic(() => import("@/components/templates/layout"));
const PokemonInformation = dynamic(() =>
  import("@/components/organism/pokemonDetail/pokemonInformation")
);
const PokemonStat = dynamic(() =>
  import("@/components/organism/pokemonDetail/pokemonStat")
);
const PokemonAbility = dynamic(
  () => import("@/components/organism/pokemonDetail/pokemonAbility"),
  {
    ssr: false,
  }
);
const PokemonMove = dynamic(
  () => import("@/components/organism/pokemonDetail/pokemonMove"),
  {
    ssr: false,
  }
);
const PokemonImage = dynamic(
  () => import("@/components/organism/pokemonDetail/pokemonImage"),
  {
    ssr: false,
  }
);
const PokemonForm = dynamic(
  () => import("@/components/organism/pokemonDetail/pokemonForm"),
  {
    ssr: false,
  }
);
const PokemonInfo = dynamic(() =>
  import("@/components/organism/pokemonDetail/pokemonInfo")
);
const PokemonDrawer = dynamic(
  () => import("@/components/organism/pokemonDetail/pokemonDrawer"),
  {
    ssr: false,
  }
);

import { PokemonContext } from "@/context/pokemonContext";
import { client } from "@/utils/apollo/client";
import { GET_POKEMON } from "@/utils/apollo/constant";
import { capitalizedText } from "@/utils/index";

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
    onSubmit: (values, { resetForm }) => {
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
      setPokemonName(values.pokemonName);
      resetForm();
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
    setPokemonName("");
  };

  const pokemonCapitalizedName = capitalizedText(pokemon.name);

  return (
    <Layout withContainer title={`${pokemonCapitalizedName} | Pokemons Detail`}>
      <section className="detail-pokemon-container">
        <PokemonInformation
          state={state}
          pokemon={pokemon}
          setIsOpen={setIsOpen}
          setIsVisible={setIsVisible}
        />
        <PokemonStat pokemon={pokemon} />
        <PokemonAbility pokemon={pokemon} />
        <PokemonMove pokemon={pokemon} />
        <Modal
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          title={pokemonCapitalizedName}
        >
          <PokemonImage
            pokemon={pokemon}
            currentAvatar={currentAvatar}
            setCurrentAvatar={setCurrentAvatar}
          />
        </Modal>
        <Modal isVisible={isResult} setIsVisible={setIsResult}>
          <PokemonForm
            isPokeballZero={isPokeballZero}
            addPokeBall={addPokeBall}
            isCatch={isCatch}
            formik={formik}
            setIsResult={setIsResult}
          />
        </Modal>
        <Modal isVisible={info} setIsVisible={setInfo}>
          <PokemonInfo
            closeInfo={closeInfo}
            currentAvatar={currentAvatar}
            pokemonName={pokemonName}
          />
        </Modal>
        <Drawer
          anchor="bottom"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="drawer"
        >
          <PokemonDrawer state={state} letsCatchPokemon={letsCatchPokemon} />
        </Drawer>
      </section>
    </Layout>
  );
};

export const getServerSideProps = async (ctx) => {
  //implementasi SSR
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
