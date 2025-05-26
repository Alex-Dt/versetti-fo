import { Box, Container, Stack, Typography } from "@mui/material";
import { Card } from "../../components/Card";

import img1 from "../../assets/images/verticals/1.png";
import img2 from "../../assets/images/verticals/2.png";
import img3 from "../../assets/images/verticals/3.png";

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
    <Box component={"section"} id="activities">
      <Container>
        <Stack
          sx={{
            mb: {
              xs: "55px",
              sm: "125px",
            },
          }}
        >
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
