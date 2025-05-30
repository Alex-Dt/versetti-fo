import { Box, Stack, Typography } from "@mui/material";
import { Container } from "../../components/Container";
import { Menu } from "../../constants/navigation";

export const Founder = () => {
  return (
    <Box component={"section"} id={Menu[2].id}>
      <Container>
        <Stack mb={"125px"} gap={4}>
          <Typography variant={"h2"}>Founder</Typography>
          <Stack gap={4}>
            <Typography>
              Angel Versetti is the Founder of Versetti Family Office and Owner
              of DOGE.ORG (the original Dogecoin community). He is a serial
              entrepreneur and investor, having previously co-founded and exited
              PrivateAI, Ambrosus, GintonicAI and Smart Security Systems.
            </Typography>
            <Typography>
              His family office's funds specialize in turnarounds of
              cryptocurrencies and have been institutional investors in Solana,
              Syscoin, Ethereum and Sonic. Prior to his entrepreneurial journey,
              Angel Versetti was a project lead and researcher at the United
              Nations (incl. UNIDIR Weapons of Mass Destruction Program, UNESCAP
              Trade and Investment Division, UNEP Investments in Sustainable
              Technologies).
            </Typography>
            <Typography>
              He studied at Oxford (MSc Evidence-Based Healthcare), Cambridge
              (BA Land Economy, Santander Scholar) and Sciences Po (MPA
              International Security, Emile Boutmy Scholar).
            </Typography>
            <Typography>
              Angel was featured on Forbes 30 under 30 Global list and received
              awards from Pope Francis (SDSN Global Youth Leaders) and Prince
              Albert II of Monaco (JCI Enterprise of the Year). He was featured
              in Wall Street Journal, Forbes, Vice Media, The Independent, CNBC
              and NASDAQ.
            </Typography>
            <Typography>
              Angel Versetti is passionate about longevity (human life extension
              technologies) and has actively funded and donated to R&D
              initiatives in this domain.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
