import Layout from "@/components/templates/layout";

import PokemonList from "@/components/organism/pokemonList";

const PokemonListPage = () => {
  //nnti ganti cara teknik fetchmorenya
  return (
    <Layout>
      <PokemonList />
    </Layout>
  );
};

export default PokemonListPage;
