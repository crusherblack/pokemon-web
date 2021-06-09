import { useEffect } from "react";

import { ApolloProvider, useQuery, gql } from "@apollo/client";
import Head from "next/head";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import "../styles/globals.scss";

import { PokemonContextProvider } from "@/context/pokemonContext";
import { client } from "../utils/apollo/client";
import theme from "../utils/theme";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PokemonContextProvider>
          <Component {...pageProps} />
        </PokemonContextProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
