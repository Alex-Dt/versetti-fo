import { Box, Container, Stack, Typography } from "@mui/material";
import { Card } from "../../components/Card";

import img1 from "../../assets/images/verticals/1.png";
import img2 from "../../assets/images/verticals/2.png";
import img3 from "../../assets/images/verticals/3.png";

import flower_blur from "../../assets/images/flower-blur.png";
import blur2 from "../../assets/images/blur2.png";

const data = [
  {
    title: "Longevity",
    icon: img1,
  },
  {
    title: "Artificial Intelligence",
    icon: img2,
  },
  {
    title: "Web3",
    icon: img3,
  },
];

export const Verticals = () => {
  return (
    <Box
      component={"section"}
      sx={{
        position: "relative",
      }}
      id="activities"
    >
      <img
        src={blur2}
        alt="robot"
        style={{
          position: "absolute",
          zIndex: -1,
          opacity: 0.5,
          right: 0,
          width: "100%",
          top: "-150%",
        }}
      />
      <Container>
        <Stack
          sx={{
            mb: {
              xs: "55px",
              sm: "125px",
            },
            position: "relative",
          }}
        >
          <img
            src={flower_blur}
            alt="robot"
            style={{
              position: "absolute",
              zIndex: -1,
              right: "20%",
              width: "30%",
              maxWidth: "219px",
              top: "140%",
              transform: "translate(-0%,-50%) rotate(0deg)",
            }}
          />
          <Typography mb={"35px"} variant={"h2"}>
            Verticals
          </Typography>
          <Stack
            sx={{
              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
            gap={2}
          >
            {data.map((_data) => {
              return <Card type={3} data={_data} />;
            })}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
