import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { Container } from "../../components/Container";

import robot from "../../assets/images/robot.png";

export const Hero = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: "relative",
      }}
    >
      <img
        src={robot}
        alt="robot"
        style={{
          position: "absolute",
          zIndex: -1,
          left: -76,
          top: "50%",
          maxHeight: "90vh",
          ...(!isDesktop && { maxHeight: "70vh" }),
          transform: "translateY(-50%) rotate(-7.29deg)",
        }}
      />
      <Container>
        <Stack
          minHeight={"100svh"}
          alignItems={{ xs: "center" }}
          justifyContent={{ xs: "flex-end", sm: "center" }}
          sx={{
            pb: {
              xs: "60px",
              sm: 0,
            },
            pr: {
              xs: "20px",
            },
            pl: {
              xs: "20px",
            },
          }}
        >
          <Typography maxWidth={800} variant={"h1"} textAlign={"center"}>
            It’s not possible to reach the stars and live forever... Yet.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
