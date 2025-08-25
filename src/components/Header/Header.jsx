import { Box, Collapse, Link, Stack, useMediaQuery } from "@mui/material";
import { Container } from "../Container";
import { Logo } from "../../assets/images/logo";
import { Navigation } from "./Navigation";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isDesktop = useMediaQuery("(min-width:600px)");

  const handleScrollEffect = () => {
    if (isOpen && !isDesktop) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    handleScrollEffect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, isDesktop]);

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
        ...(isOpen &&
          !isDesktop && {
            background: "#3A3D578A",
            backdropFilter: "blur(8px)",
          }),
      }}
    >
      <Container
        sx={{
          p: 0,
          px: 1,
        }}
      >
        <Stack
          sx={{
            pt: isScrolled ? "10px" : isDesktop ? "57px" : "10px",
            pb: isScrolled ? "10px" : isDesktop ? "0px" : "10px",
            transition: "all 0.3s ease-out",
          }}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Link
            sx={{
              display: "flex",
              svg: {
                transition: "all 0.3s ease-out",
                height: {
                  xs: 40,
                  sm: 51,
                },
              },
              ...(isScrolled && {
                svg: {
                  height: 40,
                  transition: "all 0.3s ease-out",
                },
              }),
            }}
            href="/#"
          >
            <Logo />
          </Link>
          <Navigation {...{ isOpen, setIsOpen }} />
        </Stack>
        {!isDesktop && (
          <Stack
            sx={{
              height: isOpen ? "calc(100svh - 71px)" : 0,
              justifyContent: "center",
            }}
          >
            <Navigation {...{ isOpen, setIsOpen }} isMobile={true} />
          </Stack>
        )}
      </Container>
    </Box>
  );
};
