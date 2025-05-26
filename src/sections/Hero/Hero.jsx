import { Box, Stack, Typography } from "@mui/material";
import { Container } from "../../components/Container";

import robot from "../../assets/images/robot.png";

export const Hero = () => {
  return (
    <Box
      component="section"
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
          transform: "translateY(-50%) rotate(-7.29deg)",
        }}
      />
      <Container>
        <Stack
          alignItems={"center"}
          minHeight={"100svh"}
          justifyContent={"center"}
        >
          <Typography maxWidth={800} variant={"h1"} textAlign={"center"}>
            It’s not possible to reach the stars and live forever... Yet.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
