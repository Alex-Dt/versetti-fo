import { Box, Stack, Link, IconButton, useMediaQuery, Button } from "@mui/material";
import { Menu } from "../../constants/navigation";
import NextLink from "next/link";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const Navigation = ({ isOpen, setIsOpen, isMobile = false }) => {
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const isDesktop = useMediaQuery("(min-width:600px)");

  if (isMobile) {
    return (
      <Stack
        sx={{
          scale: isOpen ? 1 : 0,
          transition: "all 0.2s ease-out",
          overflow: "auto",
        }}
      >
        <Box component="nav">
          <Stack direction="column">
            {Menu.map(({ title, href }) => {
              const isAnchorLink = href.startsWith("#");

              if (isAnchorLink) {
                return (
                  <Link
                    key={title}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    sx={{
                      p: 2,
                      textAlign: "center",
                      textTransform: "uppercase",
                      fontWeight: 500,
                      fontSize: "24px",
                    }}
                    color={"inherit"}
                    underline="none"
                  >
                    {title}
                  </Link>
                );
              } else {
                return (
                  <NextLink key={title} href={href} passHref legacyBehavior>
                    <Link
                      onClick={() => setIsOpen(false)}
                      sx={{
                        p: 2,
                        textAlign: "center",
                        textTransform: "uppercase",
                        fontWeight: 500,
                        fontSize: "24px",
                      }}
                      color={"inherit"}
                      underline="none"
                    >
                      {title}
                    </Link>
                  </NextLink>
                );
              }
            })}
          </Stack>
        </Box>
      </Stack>
    );
  }

  return (
    <Stack>
      <Box component="nav">
        <Stack direction="row">
          {!isDesktop && (
            <Stack>
              <Button
                sx={{
                  svg: {
                    fontSize: 35,
                  },
                }}
                onClick={toggleDrawer}
                size={"large"}
                color="inherit"
              >
                {isOpen ? <CloseIcon fontSize={"large"} /> : <MenuIcon fontSize={"large"} />}
              </Button>
            </Stack>
          )}
          {isDesktop &&
            Menu.map(({ title, href }) => {
              // Check if it's an anchor link or a page link
              const isAnchorLink = href.startsWith("#");

              if (isAnchorLink) {
                return (
                  <Link
                    key={`desktop_menu_${title}`}
                    href={href}
                    sx={{
                      p: 2,
                      fontSize: "16px",
                      textTransform: "uppercase",
                    }}
                    color={"inherit"}
                    underline="none"
                  >
                    {title}
                  </Link>
                );
              } else {
                return (
                  <NextLink key={`desktop_menu_${title}`} href={href} passHref legacyBehavior>
                    <Link
                      sx={{
                        p: 2,
                        fontSize: "16px",
                        textTransform: "uppercase",
                      }}
                      color={"inherit"}
                      underline="none"
                    >
                      {title}
                    </Link>
                  </NextLink>
                );
              }
            })}
        </Stack>
      </Box>
    </Stack>
  );
};
