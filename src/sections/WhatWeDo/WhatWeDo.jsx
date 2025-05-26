import { Box, Stack, Typography } from "@mui/material";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";

import img1 from "../../assets/images/whatwedo/1.png";
import img2 from "../../assets/images/whatwedo/2.png";
import img3 from "../../assets/images/whatwedo/3.png";

const data = [
  {
    icon: img1,
    title: "Invest",
    text: "We prefer to be the first and lead investor in businesses we have high conviction in. We can also follow-on and bring in high value co-investors in the subsequent round.",
  },
  {
    icon: img2,
    title: "Accelerate",
    text: "Unlike most family offices, we are led by entrepreneurs, technologists and operators, including our first-gen Founder. Our hands-on approach helps startups scale fast.",
  },
  {
    icon: img3,
    title: "Collaborate",
    text: "Exchange of knowledge is crucial, especially given our ambitious mission. We both educate and learn from other family offices as well as governments, entrepreneurs and researchers.",
  },
];

export const WhatWeDo = () => {
  return (
    <Box component={"section"} id="mission">
      <Container>
        <Stack
          sx={{
            mb: {
              xs: "73px",
              sm: "87px",
            },
          }}
        >
          <Typography
            sx={{
              mb: {
                xs: "20px",
                sm: "61px",
              },
            }}
            variant={"h2"}
          >
            What we do
          </Typography>
          <Stack
            sx={{
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              gap: {
                xs: 10,
                sm: "8%",
              },
            }}
          >
            {data.map((_data) => {
              return <Card data={_data} />;
            })}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
