import { Box, Link, Stack, Typography } from "@mui/material";
import { Container } from "../../components/Container";
import { Menu } from "../../constants/navigation";

export const Founder = () => {
  return (
    <Box component={"section"} id={Menu[2].id}>
      <Container>
        <Stack mb={"125px"} gap={4}>
          <Typography variant={"h2"}>Founder</Typography>
          <Stack>
            <Typography>
              <Link
                href="https://linkedin.com/in/angelversetti/"
                target="_blank"
                sx={{
                  textDecoration: "underline",
                }}
              >
                Angel Versetti
              </Link>{" "}
              is the Founder of Versetti Family Office and Owner of DOGE.ORG
              (the original Dogecoin community).
              <br />
              <br />
              He is a serial entrepreneur and investor, having previously
              co-founded and exited PrivateAI, Ambrosus, GintonicAI and Smart
              Security Systems.
              <br />
              <br />
              His family office's funds specialize in turnarounds of
              cryptocurrencies and have been institutional investors in Solana,
              Syscoin, Ethereum and Sonic.
              <br />
              <br />
              Prior to his entrepreneurial journey,{" "}
              <Link
                href="https://linkedin.com/in/angelversetti/"
                target="_blank"
                sx={{
                  textDecoration: "underline",
                }}
              >
                Angel Versetti
              </Link>{" "}
              was a project lead and researcher at the United Nations (incl.
              UNIDIR Weapons of Mass Destruction Program, UNESCAP Trade and
              Investment Division, UNEP Investments in Sustainable
              Technologies).
              <br />
              <br />
              He studied at Oxford (MSc Evidence-Based Healthcare), Cambridge
              (BA Land Economy, Santander Scholar) and Sciences Po (MPA
              International Security, Emile Boutmy Scholar).
              <br />
              <br />
              Angel was recognized on Forbes 30 under 30 Global list and
              received awards from Pope Francis (SDSN Global Youth Leaders) and
              Prince Albert II of Monaco (JCI Enterprise of the Year). He was
              featured in Wall Street Journal, Forbes, Vice Media, The
              Independent, CNBC and NASDAQ.
              <br />
              <br />
              <Link
                href="https://linkedin.com/in/angelversetti/"
                target="_blank"
                sx={{
                  textDecoration: "underline",
                }}
              >
                Angel Versetti
              </Link>{" "}
              is passionate about longevity (human life extension technologies)
              and has actively funded and donated to R&D initiatives in this
              domain.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
