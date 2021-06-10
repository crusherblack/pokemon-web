import { useState, useEffect, useMemo } from "react";
import { useLazyQuery } from "@apollo/client";

import PokemonList from "@/components/organism/pokemonList";
import Layout from "@/components/templates/layout";

import { GET_POKEMONS } from "@/utils/apollo/constant";

const PokemonListPage = () => {
  const PAGE_LIMIT = 20;
  const [offset, setOffset] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const [
    getPokemons,
    {
      data: pokemonsData,
      error: pokemonsError,
      loading: pokemonsLoading,
      fetchMore: pokemonsFetchMore,
    },
  ] = useLazyQuery(GET_POKEMONS, {
    onCompleted: () => {
      setIsFirstLoad;
    },
  });

  useEffect(() => {
    getPokemons({
      variables: {
        limit: PAGE_LIMIT,
        offset,
      },
    });

    setOffset((prev) => prev + PAGE_LIMIT);
  }, []);

  const loadMorePosts = () => {
    pokemonsFetchMore({
      variables: {
        limit: PAGE_LIMIT,
        offset,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult || !fetchMoreResult?.pokemons?.results?.length) {
          setIsLastPage(true);
          return prev;
        }

        const { results, ...rest } = fetchMoreResult.pokemons;
        return Object.assign({}, prev, {
          pokemons: {
            ...rest,
            results: [...prev.pokemons.results, ...results],
          },
        });
      },
    }).catch((err) => console.log(err));

    setOffset((prev) => prev + PAGE_LIMIT);
  };

  const memoizedPokemonsData = useMemo(() => pokemonsData, [pokemonsData]);

  return (
    <Layout title="Pokemons List">
      <PokemonList
        pokemonsLoading={pokemonsLoading}
        pokemonsData={memoizedPokemonsData}
        isLastPage={isLastPage}
        isFirstLoad={isFirstLoad}
        pokemonsError={pokemonsError}
        loadMorePosts={loadMorePosts}
      />
    </Layout>
  );
};

export default PokemonListPage;
