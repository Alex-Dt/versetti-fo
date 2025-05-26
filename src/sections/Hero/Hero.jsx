import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { Container } from "../../components/Container";

import robot from "../../assets/images/robot.png";
import blur1 from "../../assets/images/blur1.png";
import flower_blur from "../../assets/images/flower-blur.png";

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
        src={blur1}
        alt="robot"
        style={{
          position: "absolute",
          zIndex: -1,
          width: "100%",
          right: 0,
          top: 0,
        }}
      />
      <img
        src={flower_blur}
        alt="robot"
        style={{
          position: "absolute",
          zIndex: -1,
          left: "62%",
          width: "20%",
          maxWidth: "318px",
          top: "65%",
          transform: "translate(-0%,-50%)",
        }}
      />

      <img
        src={flower_blur}
        alt="robot"
        style={{
          position: "absolute",
          zIndex: -1,
          right: "10%",
          width: "20%",
          maxWidth: "96px",
          top: "43%",
          transform: "translate(-0%,-50%) rotate(30deg)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          height: "43svh",
          width: "100%",
          left: 0,
          bottom: 0,
          background: "#201E2F",
          transform: "rotate(-180deg)",
          //   background: "linear-gradient(rgba(32, 30, 47, 0),#201E2F )",
          maskImage: "linear-gradient(to bottom,black 10%,transparent 80%)",
          filter: "blur(42px)",
          backdropFilter: "blur(40.8px)",
        }}
      />
      <img
        src={robot}
        alt="robot"
        style={{
          position: "absolute",
          zIndex: -1,
          left: 0,
          bottom: "5%",
          //   top: "100%",
          maxHeight: "90vh",
          ...(!isDesktop && { maxHeight: "70vh", left: -60 }),
          //   transform: "translateY(-50%) rotate(-7.29deg)",
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
          <Typography
            maxWidth={730}
            position={"relative"}
            zIndex={20}
            variant={"h1"}
            sx={{
              letterSpacing: "-4%",
            }}
            textAlign={"center"}
          >
            It’s not possible to reach the stars and live forever...
            <br />
            Yet.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
