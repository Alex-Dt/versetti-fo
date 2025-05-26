import { Hero } from "../../sections/Hero";
import { WhatWeDo } from "../../sections/WhatWeDo";
import { Verticals } from "../../sections/Verticals";
import { Portfolio } from "../../sections/Portfolio";
import { Exited } from "../../sections/Exited";
import { Container } from "../../components/Container";
import { Stack, Typography } from "@mui/material";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Container>
        <Stack
          gap={3}
          sx={{
            textAlign: {
              xs: "center",
              sm: "left",
            },
            pt: {
              xs: "0px",
              sm: "126px",
            },
            pb: {
              xs: "56px",
              sm: "86px",
            },
          }}
        >
          <Typography>
            Founded by the serial entrepreneur Angel Versetti, our Family Office
            seeks out the boldest deep tech ventures and nurtures them with
            funding, strategic guidance and operational support.
          </Typography>

          <Typography>
            In particular, we focus on longevity startups and R&D projects that
            serve as pieces of the puzzle to solve aging and increase human
            lifespan and healthspan.
          </Typography>

          <Typography>
            So that ultimately, we could, indeed, reach the stars and live
            forever.
          </Typography>
        </Stack>
      </Container>
      <WhatWeDo />
      <Verticals />
      <Portfolio />
      <Exited />
    </>
  );
};
