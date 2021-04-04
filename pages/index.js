import React from "react";

import Navbar from "../components/organisms/landing/navbar";
import Hero from "../components/organisms/landing/hero";
import Description from "../components/organisms/landing/description";

export default function Index() {
  return (
    <>
      <Navbar />
      <Hero />
      <Description />
    </>
  );
}
