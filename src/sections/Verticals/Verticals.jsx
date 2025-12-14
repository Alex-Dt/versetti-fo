import { Box, Container, Stack, Typography } from "@mui/material";
import { Card } from "../../components/Card";
import { useScrollAnimation, fadeInUp } from "../../hooks/useScrollAnimation";

const img1 = "/assets/images/verticals/1.svg";
const img2 = "/assets/images/verticals/2.svg";
const img3 = "/assets/images/verticals/web3.svg";

const flower_blur = "/assets/images/flower-blur.png";
const blur2 = "/assets/images/blur2.png";

const data = [
  {
    title: "Longevity",
    icon: img1,
    href: "/priorities",
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
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <Box
      component={"section"}
      sx={{
        position: "relative",
      }}
    >
      <img
        loading="lazy"
        src={blur2}
        alt="robot"
        style={{
          position: "absolute",
          zIndex: -1,
          opacity: 0.5,
          right: 0,
          width: "100%",
          top: "-150%",
        }}
      />
      <Container>
        <Stack
          sx={{
            mb: {
              xs: "55px",
              sm: "125px",
            },
            position: "relative",
          }}
        >
          <img
            loading="lazy"
            src={flower_blur}
            alt=""
            className="floating-flower-slow"
            style={{
              position: "absolute",
              pointerEvents: "none",
              zIndex: -1,
              right: "20%",
              width: "30%",
              maxWidth: "219px",
              top: "140%",
              "--flower-rotate": "0deg",
            }}
          />
          <Typography mb={"35px"} variant={"h2"} sx={{ ...fadeInUp(isVisible, 0) }}>
            Verticals
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
            {data.map((_data) => {
              return <Card key={_data.title} type={3} data={_data} />;
            })}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
