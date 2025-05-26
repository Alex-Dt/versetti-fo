import { Stack } from "@mui/material";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export const MainLayout = ({ children }) => {
  return (
    <Stack flex={1} overflow={"hidden"}>
      <Header />
      <Stack flex={1}>{children}</Stack>
      <Footer />
    </Stack>
  );
};
