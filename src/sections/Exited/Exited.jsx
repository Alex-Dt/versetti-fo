import { Box, Stack, Typography } from "@mui/material";
import { Container } from "../../components/Container";
import Grid from "@mui/material/Grid";

import img1 from "../../assets/images/exited/eth.svg";
import img2 from "../../assets/images/exited/sss.png";
import img3 from "../../assets/images/exited/doge.png";
import img4 from "../../assets/images/exited/secuchip.png";
import img5 from "../../assets/images/exited/sys.png";
import img6 from "../../assets/images/exited/ambrosus.png";
import img7 from "../../assets/images/exited/privateailabs.png";
import img8 from "../../assets/images/exited/numerai.png";
import img9 from "../../assets/images/exited/bat.svg";
import img10 from "../../assets/images/exited/bit.png";

const data = [
  {
    icon: img1,
    height: 33,
    title: "eth",
  },
  {
    icon: img2,
    title: "sss",
    height: 86,
  },
  {
    icon: img3,
    title: "doge",
    height: 86,
  },
  {
    icon: img4,
    title: "secuchip",
    height: 86,
  },
  {
    icon: img5,
    title: "sys",
    height: 86,
  },
  {
    icon: img6,
    title: "ambrosus",
    height: 86,
  },
  {
    icon: img7,
    title: "privateailabs",
    height: 86,
  },
  {
    icon: img8,
    title: "numerai",
    height: 86,
  },
  {
    icon: img9,
    title: "bat",
    height: 73,
  },
  {
    icon: img10,
    title: "bit",
    height: 86,
  },
];

export const Exited = () => {
  return (
    <Box component={"section"} id="exited">
      <Container>
        <Stack mb={"128px"}>
          <Typography variant={"h2"} mb={"8px"}>
            Exited
          </Typography>
          <Box overflow={"hidden"}>
            <Grid container spacing={0} m={"-1px"}>
              {data.map((_data) => {
                return (
                  <Grid
                    size={12 / 5}
                    p={2}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      minHeight: 140,
                    }}
                    border={"0.5px solid #3C3950"}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: _data.height,
                        objectFit: "contain",
                        mixBlendMode: "lighten",
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
