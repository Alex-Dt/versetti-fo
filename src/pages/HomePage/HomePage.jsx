import { Hero } from "../../sections/Hero";
import { WhatWeDo } from "../../sections/WhatWeDo";
import { Verticals } from "../../sections/Verticals";
import { Portfolio } from "../../sections/Portfolio";
import { Exited } from "../../sections/Exited";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Verticals />
      <Portfolio />
      <Exited />
    </>
  );
};
