import { Box, Stack, Typography } from "@mui/material";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";

import img1 from "../../assets/images/whatwedo/1.svg";
import img2 from "../../assets/images/whatwedo/2.svg";
import img3 from "../../assets/images/whatwedo/3.svg";

import flower_blur from "../../assets/images/flower-blur.png";
import { Menu } from "../../constants/navigation";

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
    <Box
      component={"section"}
      sx={{
        position: "relative",
      }}
      id={Menu[1].id}
    >
      <Container>
        <Stack
          sx={{
            position: "relative",
            mb: {
              xs: "73px",
              sm: "87px",
            },
          }}
        >
          <img
            loading="lazy"
            src={flower_blur}
            alt="robot"
            style={{
              position: "absolute",
              outline: "none",
              pointerEvents: "none",
              zIndex: -1,
              right: "0%",
              width: "40%",
              maxWidth: "495px",
              top: "-15%",
              transform: "translate(-0%,-50%) rotate(-10deg)",
            }}
          />

          <img
            loading="lazy"
            src={flower_blur}
            alt="robot"
            style={{
              position: "absolute",
              outline: "none",
              pointerEvents: "none",
              zIndex: -1,
              left: "15%",
              width: "30%",
              maxWidth: "219px",
              top: "55%",
              transform: "translate(-0%,-50%) rotate(-60deg)",
            }}
          />

          <img
            loading="lazy"
            src={flower_blur}
            alt="robot"
            style={{
              position: "absolute",
              outline: "none",
              pointerEvents: "none",
              zIndex: -1,
              right: "8%",
              width: "30%",
              maxWidth: "99px",
              top: "64%",
              transform: "translate(-0%,-50%) rotate(30deg)",
            }}
          />
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
                sm: "5.5%",
              },
            }}
          >
            {data.map((_data) => {
              return <Card key={_data.title} data={_data} />;
            })}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
