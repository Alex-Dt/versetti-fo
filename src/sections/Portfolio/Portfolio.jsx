import { Box, Container, Stack, Typography } from "@mui/material";
import { Card } from "../../components/Card";
import { SolanaLogo } from "../../assets/images/portfolios/solanaLogo";
import { SonicLogo } from "../../assets/images/portfolios/sonicLogo";
import { useScrollAnimation, fadeInUp } from "../../hooks/useScrollAnimation";

const flower_blur = "/assets/images/flower-blur.png";
import { Menu } from "../../constants/navigation";

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
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <Box component={"section"} id={Menu[3].id}>
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
            loading="lazy"
            src={flower_blur}
            alt=""
            className="floating-flower"
            style={{
              position: "absolute",
              pointerEvents: "none",
              left: "20%",
              width: "30%",
              maxWidth: "180px",
              bottom: "-60%",
              zIndex: 200,
              "--flower-rotate": "-70deg",
            }}
          />
          <Typography mb={"24px"} variant={"h2"} sx={{ ...fadeInUp(isVisible, 0) }}>
            Portfolio
          </Typography>
          <Stack
            ref={sectionRef}
            sx={{
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              ...fadeInUp(isVisible, 0.15),
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
