import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { Container } from "../../components/Container";
import Grid from "@mui/material/Grid";

import img1 from "../../assets/images/exited/eth.svg";
import img2 from "../../assets/images/exited/sss.png";
import img3 from "../../assets/images/exited/doge.svg";
import img4 from "../../assets/images/exited/secuchip.png";
import img5 from "../../assets/images/exited/sys.svg";
import img6 from "../../assets/images/exited/ambrosus.svg";
import img7 from "../../assets/images/exited/privateailabs.png";
import img8 from "../../assets/images/exited/numerai.svg";
import img9 from "../../assets/images/exited/bat3.svg";
import img10 from "../../assets/images/exited/bit.png";

const data = [
  {
    icon: img1,
    height: 33,
    title: "eth",
  },
  {
    icon: img5,
    title: "sys",
    height: 86,
  },
  {
    icon: img3,
    title: "doge",
    height: 86,
  },
  {
    icon: img10,
    title: "bit",
    height: 86,
  },
  {
    icon: img6,
    title: "ambrosus",
    height: 86,
  },
  {
    icon: img8,
    title: "numerai",
    height: 47,
  },
  {
    icon: img7,
    title: "privateailabs",
    height: 86,
  },
  {
    icon: img9,
    isCustom: true,
    title: "bat",
    height: 53,
  },
  {
    icon: img2,
    title: "sss",
    height: 86,
  },
  {
    icon: img4,
    title: "secuchip",
    height: 86,
  },
];

export const Exited = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <Box component={"section"} id="exited">
      <Container>
        <Stack
          sx={{
            mb: {
              xs: "54px",
              sm: "128px",
            },
          }}
        >
          <Typography variant={"h2"} mb={"8px"}>
            Exited
          </Typography>
          <Box overflow={"hidden"}>
            <Grid container spacing={0} m={"-1px"}>
              {data.map((_data) => {
                return (
                  <Grid
                    key={_data.title}
                    size={isDesktop ? 12 / 5 : 12 / 2}
                    p={2}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mixBlendMode: "screen",
                      minHeight: {
                        xs: 82,
                        sm: 140,
                      },
                      pt: {
                        xs: 0,
                        sm: 2,
                      },
                      pb: {
                        xs: 0,
                        sm: 2,
                      },
                    }}
                    border={"0.5px solid #3C3950"}
                  >
                    <img
                      loading="lazy"
                      style={{
                        width: _data?.isCustom ? "auto" : "100%",
                        height: isDesktop ? _data.height : 50,
                        objectFit: "contain",
                      }}
                      src={_data.icon}
                      alt={_data.title}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
