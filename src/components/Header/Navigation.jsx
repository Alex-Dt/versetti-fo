import {
  Box,
  Stack,
  Link,
  IconButton,
  useMediaQuery,
  Button,
} from "@mui/material";
import { menu } from "../../constants/navigation";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const Navigation = ({ isOpen, setIsOpen, isMobile = false }) => {
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const isDesktop = useMediaQuery("(min-width:600px)");

  //   const [activeSection, setActiveSection] = useState("");

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       let currentSection = "";

  //       menu.forEach(({ title }) => {
  //         const section = document.getElementById(title.toLowerCase());
  //         if (section) {
  //           const rect = section.getBoundingClientRect();
  //           if (rect.top <= 200 && rect.bottom >= 100) {
  //             currentSection = title.toLowerCase();
  //           }
  //         }
  //       });

  //       setActiveSection(currentSection);
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     handleScroll();

  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, []);
  if (isMobile) {
    return (
      <Stack>
        <Box component="nav">
          <Stack direction="column">
            {menu.map(({ title, href }) => {
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
                  color={
                    "inherit"
                    //   activeSection === title.toLowerCase() ? "red" : "inherit"
                  }
                  underline="none"
                >
                  {title}
                </Link>
              );
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
                {isOpen ? (
                  <CloseIcon fontSize={"large"} />
                ) : (
                  <MenuIcon fontSize={"large"} />
                )}
              </Button>
            </Stack>
          )}
          {isDesktop &&
            menu.map(({ title, href }) => {
              return (
                <Link
                  key={`desktop_menu_${title}`}
                  href={href}
                  sx={{
                    p: 2,
                  }}
                  color={
                    "inherit"
                    //   activeSection === title.toLowerCase() ? "red" : "inherit"
                  }
                  underline="none"
                >
                  {title}
                </Link>
              );
            })}
        </Stack>
      </Box>
    </Stack>
  );
};
