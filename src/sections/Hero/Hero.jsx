import { Box, Grid, Typography } from "@mui/material";

import { Container } from "../../components/Container";

export const Hero = () => {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          minHeight: {
            xs: "auto",
            md: "811px",
          },
          height: {
            xs: "auto",
            md: "calc(100svh + 100px)",
          },
          left: 0,
          top: 0,
          zIndex: -1,
        }}
      >
        <Box
          component="img"
          src="/assets/images/bg5.png"
          alt="bg"
          sx={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            minWidth: {
              xs: "250vw",
              md: 1511,
            },
            height: "100%",
            minHeight: {
              xs: "auto",
              sm: 811,
            },
            objectFit: {
              xs: "contain",
              md: "cover",
            },
            objectPosition: "0 100px",
            zIndex: -10,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            pointerEvents: "none",
            height: "30vh",
            width: "100%",
            left: 0,
            bottom: 0,
            background: "linear-gradient(rgba(32, 30, 47, 0),#1E1D2E )",
            zIndex: -9,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            pointerEvents: "none",
            height: "30vh",
            width: "100%",
            left: 0,
            bottom: 0,
            mask: "linear-gradient(#1E1D2E, #1E1D2E, transparent)",
            backdropFilter: "blur(9px)",
            transform: "rotate(-180deg)",
            zIndex: -8,
          }}
        />
      </Box>

      <Container
        sx={{
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%!important",
        }}
      >
        <Grid
          flex={1}
          container
          sx={{
            alignItems: {
              xs: "flex-end",
              md: "center",
            },
          }}
        >
          <Grid
            size={{
              xs: 0,
              md: 6,
            }}
          />
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                mb: {
                  xs: 8,
                  md: 0,
                },
                fontSize: {
                  xs: "clamp(30px, 10vw, 77px)",
                  sm: "clamp(37px, 7.28vw, 77px)",
                  md: "clamp(37px, 5.28vw, 77px)",
                  lg: "clamp(37px, 4.28vw, 77px)",
                },
                textAlign: {
                  xs: "center",
                  md: "left",
                },
              }}
            >
              <span>It’s</span> <span>not</span> <span>possible</span>
              <br />
              <span>to</span> <span>reach</span> <span>the</span> <span>stars</span>
              <br />
              <span>and</span> <span>live</span> <span>forever...</span>
              <br />
              <br />
              <span>Yet.</span>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
