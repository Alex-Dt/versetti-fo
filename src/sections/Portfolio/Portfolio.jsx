import { Box, Container, Stack, Typography } from "@mui/material";
import { Card } from "../../components/Card";
import { SolanaLogo } from "../../assets/images/portfolios/solanaLogo";
import { SonicLogo } from "../../assets/images/portfolios/sonicLogo";

const data = [
  {
    icon: <SolanaLogo height={62} />,
  },
  {
    icon: <SonicLogo height={103} />,
  },
];

export const Portfolio = () => {
  return (
    <Box component={"section"} id="portfolio">
      <Container>
        <Stack mb={"51px"}>
          <Typography mb={"24px"} variant={"h2"}>
            Portfolio
          </Typography>
          <Stack direction={"row"} gap={2}>
            {data.map((_data) => {
              return <Card type={2} data={_data} />;
            })}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
