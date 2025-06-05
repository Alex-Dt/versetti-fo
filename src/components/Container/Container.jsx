import { Container as ContainerMUI } from "@mui/material";

export const Container = ({ children, sx }) => {
  return (
    <ContainerMUI sx={sx} maxWidth={"lg"}>
      {children}
    </ContainerMUI>
  );
};
