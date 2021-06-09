import { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroll-component";

import Grid from "@material-ui/core/Grid";

import Card from "@/components/molecules/card";
import Loading from "@/components/atoms/loading";
import Skeleton from "@/components/atoms/skeletons/simple";

import { GET_POKEMONS } from "@/utils/apollo/constant";

const list = () => {
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

  return pokemonsLoading ? (
    <Loading />
  ) : pokemonsError ? (
    <h1>error please refresh the page</h1>
  ) : (
    <InfiniteScroll
      dataLength={pokemonsData?.pokemons?.results.length ?? 0}
      next={loadMorePosts}
      hasMore={!isLastPage}
      loader={
        !isFirstLoad && (
          <Grid container spacing={2} className="pokemon-list-container">
            {[...Array(8)].map(item, (index) => (
              <Grid
                container
                item
                sm={6}
                md={2}
                lg={2}
                xs={6}
                key={pokemon.id + pokemon.name}
              >
                <Skeleton />
              </Grid>
            ))}
          </Grid>
        )
      }
      endMessage={
        <p
          style={{
            textAlign: "center",
            marginTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <b>Yay! End of page, You have seen it all Pokemons</b>
        </p>
      }
    >
      <Grid container spacing={2} className="pokemon-list-container">
        {pokemonsData?.pokemons?.results.map((pokemon, index) => (
          <Grid
            container
            item
            sm={6}
            md={2}
            lg={2}
            xs={6}
            key={pokemon.id + pokemon.name}
          >
            <Card pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};

export default list;
