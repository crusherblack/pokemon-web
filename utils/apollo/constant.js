import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query getPokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      status
      results {
        name
        url
        image
        id
      }
    }
  }
`;

export const GET_POKEMON = gql`
  query getPokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      base_experience
      height
      weight
      location_area_encounters
      moves {
        move {
          name
        }
      }
      order
      species {
        name
      }
      sprites {
        back_default
        back_female
        back_shiny
        back_shiny_female
        front_default
        front_female
        front_shiny
        front_shiny_female
      }
      stats {
        base_stat
        effort
        stat {
          name
        }
      }
      types {
        slot
        type {
          name
        }
      }
      abilities {
        ability {
          name
          name
        }
        is_hidden
        slot
      }
    }
  }
`;
