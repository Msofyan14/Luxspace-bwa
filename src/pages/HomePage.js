import React from "react";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import BrowseRoom from "../parts/Homepage/BrowseRoom";
import JustArrived from "../parts/Homepage/JustArrived";
import Clients from "../parts/Clients";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

const HomePage = () => {
  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
};

export default HomePage;