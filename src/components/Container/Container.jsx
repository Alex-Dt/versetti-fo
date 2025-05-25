import { Container as ContainerMUI } from "@mui/material";

export const Container = ({ children }) => {
  return <ContainerMUI maxWidth={"lg"}>{children}</ContainerMUI>;
};
