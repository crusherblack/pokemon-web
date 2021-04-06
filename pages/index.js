import React from "react";

import Navbar from "../components/organisms/landing/navbar";
import Hero from "../components/organisms/landing/hero";
import Description from "../components/organisms/landing/description";
import NewestTutorial from "../components/organisms/landing/newestTutorial";
import JoinUs from "../components/organisms/landing/joinUs";
import Article from "../components/organisms/landing/article";
import Footer from "../components/organisms/landing/footer";

export default function Index() {
  return (
    <>
      <Navbar />
      <Hero />
      <Description />
      <NewestTutorial />
      <JoinUs />
      <Article />
      <Footer />
    </>
  );
}
