import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export const MainLayout = () => {
  return (
    <Stack flex={1} overflow={"hidden"}>
      <Header />
      <Stack flex={1}>
        <Outlet />
      </Stack>
      <Footer />
    </Stack>
  );
};
