import React from "react";
import Destination from "../components/Destination/Destination";
import Download from "../components/Download/Download";
import Hero from "../components/Hero/Hero";
import HeroBar from "../components/HeroBar/HeroBar";
import Offer from "../components/Offer/Offer";
import Testimonial from "../components/Testimonial/Testimonial";
import Tour from "../components/Tour/Tour";
import Works from "../components/Works/Works";

const Home = () => {

  return (
    <div>
      <Hero />
      <HeroBar />
      <Works />
      <Destination />
      <Offer />
      <Tour />
      <Testimonial />
      <Download />
    </div>
  );
};

export default Home;
