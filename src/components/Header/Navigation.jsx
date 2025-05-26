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

export const Navigation = ({ isOpen, setIsOpen }) => {
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
  return (
    <Stack>
      <Box component="nav">
        <Stack direction="row">
          {!isDesktop && (
            <Stack>
              <Button
                sx={{
                  svg: {
                    fontSize: 40,
                  },
                }}
                onClick={toggleDrawer}
                size={"large"}
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
