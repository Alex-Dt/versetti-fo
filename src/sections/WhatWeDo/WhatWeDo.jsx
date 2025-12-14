import { Box, Button, Stack, Typography } from "@mui/material";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import Link from "next/link";

const img1 = "/assets/images/whatwedo/1.svg";
const img2 = "/assets/images/whatwedo/2.svg";
const img3 = "/assets/images/whatwedo/3.svg";

const flower_blur = "/assets/images/flower-blur.png";
import { Menu } from "../../constants/navigation";

const data = [
  {
    icon: img1,
    title: "Invest",
    text: "We prefer to be the first and lead investor in businesses we have high conviction in. We can also follow-on and bring in high value co-investors in the subsequent round.",
  },
  {
    icon: img2,
    title: "Accelerate",
    text: "Unlike most family offices, we are led by entrepreneurs, technologists and operators, including our first-gen Founder. Our hands-on approach helps startups scale fast.",
  },
  {
    icon: img3,
    title: "Collaborate",
    text: "Exchange of knowledge is crucial, especially given our ambitious mission. We both educate and learn from other family offices as well as governments, entrepreneurs and researchers.",
  },
];

export const WhatWeDo = () => {
  return (
    <Box
      component={"section"}
      sx={{
        position: "relative",
      }}
      id={Menu[1].id}
    >
      <Container>
        <Stack
          sx={{
            position: "relative",
            mb: {
              xs: "73px",
              sm: "87px",
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
              outline: "none",
              pointerEvents: "none",
              zIndex: -1,
              right: "0%",
              width: "40%",
              maxWidth: "495px",
              top: "-15%",
              "--flower-rotate": "-10deg",
            }}
          />

          <img
            loading="lazy"
            src={flower_blur}
            alt=""
            className="floating-flower-slow"
            style={{
              position: "absolute",
              outline: "none",
              pointerEvents: "none",
              zIndex: -1,
              left: "15%",
              width: "30%",
              maxWidth: "219px",
              top: "55%",
              "--flower-rotate": "-60deg",
            }}
          />

          <img
            loading="lazy"
            src={flower_blur}
            alt=""
            className="floating-flower-fast"
            style={{
              position: "absolute",
              outline: "none",
              pointerEvents: "none",
              zIndex: -1,
              right: "8%",
              width: "30%",
              maxWidth: "99px",
              top: "64%",
              "--flower-rotate": "30deg",
            }}
          />
          <Typography
            sx={{
              mb: {
                xs: "20px",
                sm: "61px",
              },
            }}
            variant={"h2"}
          >
            What we do
          </Typography>
          <Stack
            sx={{
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              gap: {
                xs: 10,
                sm: "5.5%",
              },
            }}
          >
            {data.map((_data) => {
              return <Card key={_data.title} data={_data} />;
            })}
          </Stack>
          <Stack
            sx={{
              alignItems: "center",
              mt: {
                xs: 5,
                sm: 7,
              },
              position: "relative",
              zIndex: 1,
            }}
          >
            <Button
              component={Link}
              href="/priorities"
              variant="outlined"
              size="large"
              sx={{
                borderRadius: "30px",
                borderColor: "rgba(255, 255, 255, 0.5)",
                color: "#fff",
                px: 4,
                py: 1.5,
                fontWeight: 600,
                fontSize: "16px",
                textTransform: "none",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  borderColor: "#fff",
                  background: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              View Priorities
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
