import React from "react";
import HomeHero from "./HomeHero";
import HomeInrto from "./HomeInrto";
import HomeServices from "./HomeServices";
import HomeTestimonials from "./HomeTestimonials";
import HomeIntro2 from "./HomeIntro2";

export default function HomeMain() {
  return (
    <div>
      <HomeHero />
      {/* <HomeIntro2 /> */}
      <HomeServices />
      <HomeTestimonials />
      <HomeInrto />
    </div>
  );
}
