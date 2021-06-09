import InfiniteScroll from "react-infinite-scroll-component";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

import Loading from "@/components/atoms/loading";
import Skeleton from "@/components/atoms/skeletons/simple";
import Card from "@/components/molecules/card";

const ListComponent = ({
  pokemonsLoading,
  pokemonsData,
  isLastPage,
  isFirstLoad,
  pokemonsError,
  loadMorePosts,
}) => {
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

ListComponent.propTypes = {
  pokemonsLoading: PropTypes.bool.isRequired,
  pokemonsData: PropTypes.object,
  isLastPage: PropTypes.bool.isRequired,
  isFirstLoad: PropTypes.bool.isRequired,
  pokemonsError: PropTypes.bool,
  loadMorePosts: PropTypes.func.isRequired,
};

export default ListComponent;
