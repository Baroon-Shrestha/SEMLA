import React from "react";
import AboutHero from "../Components/AboutComponents/AboutHero"; // ✅ Correct
import Team from "../Components/AboutComponents/Team"; // ✅ FIXED path
import WhoAreWe from "../Components/AboutComponents/WhoAreWe";
import AboutTeam from "../Components/AboutComponents/AboutTeam";
import Successstories from "../Components/AboutComponents/Successstories";

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutTeam />
      <Team />
      {/* <Successstories /> */}
    </div>
  );
}
