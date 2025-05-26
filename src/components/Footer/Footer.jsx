import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { Container } from "../Container";
import { ContactForm } from "../ContactForm";
import { TwitterXIcon } from "../../assets/socials/twitterXIcon";
import { LinkedInIcon } from "../../assets/socials/linkedInIcon";

const socials = [
  {
    icon: <LinkedInIcon height={33} />,
    title: "",
    href: "",
  },
  {
    icon: <TwitterXIcon height={33} />,
    title: "",
    href: "",
  },
];

export const Footer = () => {
  return (
    <Box component={"footer"} bgcolor={"#171521"}>
      <Container>
        <Stack gap={2} pt={"151px"} direction={"row"} pb={"151px"}>
          <Stack flex={1}>
            <Stack
              sx={{
                maxWidth: " 428px",
                flex: 1,
              }}
            >
              <Typography variant={"h2"}>Get in touch</Typography>
              <Stack direction={"row"} mb={3} gap={1}>
                {socials.map((social) => {
                  return (
                    <Button
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
                      }}
                    >
                      {social.icon}
                    </Button>
                  );
                })}
              </Stack>
              <Typography color={"#837BBE"} sx={{ fontSize: 16 }} mt={"auto"}>
                Versetti Family Office via its affiliate companies shall not be
                responsible or liable for any content of this website or any
                communications sent from any e-mail address of this domain.
                VERSETTI.CO All rights reserved.
              </Typography>
            </Stack>
          </Stack>
          <Stack flex={1}>
            <ContactForm />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
