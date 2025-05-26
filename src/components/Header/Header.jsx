import { Box, Link, Stack, useMediaQuery } from "@mui/material";
import { Container } from "../Container";
import { Logo } from "../../assets/images/logo";
import { Navigation } from "./Navigation";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isDesktop = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      component="header"
      position={"fixed"}
      sx={{
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 100,
        backdropFilter: isScrolled ? "blur(8px)" : "none",
        background: isScrolled ? "#3A3D578A" : "transparent",
        transition: "all 0.3s ease-out",
      }}
    >
      <Container>
        <Stack
          sx={{
            pt: isScrolled ? "20px" : isDesktop ? "57px" : "20px",
            pb: isScrolled ? "20px" : isDesktop ? "0px" : "20px",
            transition: "all 0.3s ease-out",
          }}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Link
            sx={{
              display: "flex",
            }}
            href="/#"
          >
            <Logo />
          </Link>
          <Navigation {...{ isOpen, setIsOpen }} />
        </Stack>
      </Container>
    </Box>
  );
};
