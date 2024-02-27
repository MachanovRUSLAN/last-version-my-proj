import React from "react";
import AboutCount from "../../components/AboutCounts";
import AboutSlide from "../../components/AboutSlide";
import AboutContent from "../../components/AboutContent";
import AboutsecondSlide from "../../components/AboutsecondSlide";
import AboutTeam from "../../components/AboutTeam";

function About() {
  return (
    <>
      <AboutContent />
      <AboutSlide />
      <AboutCount />
      <AboutsecondSlide />
      <AboutTeam />
    </>
  );
}

export default About;
