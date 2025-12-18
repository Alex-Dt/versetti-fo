import { Box, Button, Stack, Typography } from "@mui/material";
import { Container } from "../Container";
import { ContactForm } from "../ContactForm";
import { TwitterXIcon } from "../../assets/socials/twitterXIcon";
import { LinkedInIcon } from "../../assets/socials/linkedInIcon";

const socials = [
  {
    icon: <LinkedInIcon height={33} />,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/angelversetti/",
  },
  {
    icon: <TwitterXIcon height={33} />,
    title: "TwitterX",
    href: "https://x.com/angelversetti",
  },
];

export const Footer = () => {
  return (
    <Box component={"footer"} id="contact" bgcolor={"#171521"}>
      <Container>
        <Stack
          sx={{
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            pt: {
              xs: "56px",
              sm: "151px",
            },
            pb: {
              xs: "56px",
              sm: "151px",
            },
          }}
          gap={4}
        >
          <Stack sx={{ flex: { xs: 1, sm: "0 0 30%" } }}>
            <Stack
              sx={{
                maxWidth: {
                  sm: "100%",
                  xs: "100%",
                },
                flex: 1,
              }}
            >
              <Typography variant={"h2"}>Get in touch</Typography>
              <Stack
                sx={{
                  mt: {
                    xs: 1,
                    sm: 0,
                  },
                  mb: {
                    xs: 2,
                    sm: 3,
                  },
                  justifyContent: {
                    xs: "center",
                    sm: "flex-start",
                  },
                }}
                direction={"row"}
                gap={1}
              >
                {socials.map((social) => {
                  return (
                    <Button
                      key={social.title}
                      variant={"contained"}
                      href={social.href}
                      target={"_blank"}
                      sx={{
                        background: "#1C1A2A",
                        boxShadow: "none",
                        borderRadius: "10px",
                        color: "#fff",
                        width: "52px",
                        minWidth: "52px",
                        height: "48px",
                        "&:hover": {
                          background: "#3A3D578A",
                        },
                      }}
                    >
                      {social.icon}
                    </Button>
                  );
                })}
              </Stack>
              <Typography
                sx={{
                  textAlign: "justify",
                  display: {
                    xs: "none",
                    sm: "flex",
                  },
                  fontSize: 16,
                  opacity: 0.5,
                }}
                color={"#837BBE"}
                mt={"auto"}
              >
                Versetti Family Office via its affiliate companies shall not be
                responsible or liable for any content of this website or any
                communications sent from any e-mail address of this domain.
                VERSETTI.CO All rights reserved.
              </Typography>
            </Stack>
          </Stack>
          <Stack sx={{ flex: { xs: 1, sm: "0 0 70%" } }} gap={3}>
            <ContactForm />
          </Stack>
          <Stack>
            <Typography
              sx={{
                display: {
                  xs: "flex",
                  sm: "none",
                },
                opacity: 0.5,
                fontSize: 13,
                textAlign: "justify",
              }}
              color={"#837BBE"}
              mt={4}
            >
              Versetti Family Office via its affiliate companies shall not be
              responsible or liable for any content of this website or any
              communications sent from any e-mail address of this domain.
              VERSETTI.CO All rights reserved.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
