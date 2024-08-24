import React from "react";
import Hero from "./Hero";
import Service from "./Service";
import WhatWeDo from "./WhatWeDo";
import JoinUs from "./JoinUs";
import About from "./About";
import Article from "./Article";

const Home = () => {
  return (
    <main className="">
      <Hero />
      <Service />
      <About />
      <WhatWeDo />
      <Article />
      <JoinUs />
    </main>
  );
};

export default Home;
