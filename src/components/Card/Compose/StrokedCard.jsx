import { Card, Stack, Typography, useMediaQuery } from "@mui/material";

export const StrokedCard = ({ icon, title }) => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <>
      <Card
        variant={"outlined"}
        sx={{
          flex: 1,
          borderRadius: "30px",
          background: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          p={2}
          direction={"row"}
          gap={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img
            loading="lazy"
            style={{
              height: 63,
              minHeight: 63,
              objectFit: "contain",
              ...(!isDesktop && { height: 40, minHeight: 40 }),
            }}
            src={icon}
            alt={title}
          />
          <Typography variant={"h3"}>{title}</Typography>
        </Stack>
      </Card>
    </>
  );
};
