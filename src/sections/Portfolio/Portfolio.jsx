import { Box, Container, Stack, Typography } from "@mui/material";
import { Card } from "../../components/Card";
import { SolanaLogo } from "../../assets/images/portfolios/solanaLogo";
import { SonicLogo } from "../../assets/images/portfolios/sonicLogo";

import flower_blur from "../../assets/images/flower-blur.png";

const data = [
  {
    icon: <SolanaLogo height={62} />,
    height: 62,
  },
  {
    icon: <SonicLogo height={103} />,
    height: 103,
  },
];

export const Portfolio = () => {
  return (
    <Box component={"section"} id="portfolio">
      <Container>
        <Stack
          sx={{
            position: "relative",
            mb: {
              xs: "61px",
              sm: "51px",
            },
          }}
        >
          <img
            src={flower_blur}
            alt="robot"
            style={{
              position: "absolute",
              left: "20%",
              width: "30%",
              maxWidth: "180px",
              bottom: "-60%",
              transform: "translate(-0%,-50%) rotate(-70deg)",
              zIndex: 200,
            }}
          />
          <Typography mb={"24px"} variant={"h2"}>
            Portfolio
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
            {data.map((_data, index) => {
              return (
                <Card key={`Portfolio_${index}_card`} type={2} data={_data} />
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
