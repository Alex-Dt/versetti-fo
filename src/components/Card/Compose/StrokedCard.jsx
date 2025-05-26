import { Card, Stack, Typography } from "@mui/material";

export const StrokedCard = ({ icon, title }) => {
  return (
    <>
      <Card
        variant={"outlined"}
        sx={{
          flex: 1,
          borderRadius: "30px",
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
            style={{
              height: 63,
              minHeight: 63,
              objectFit: "contain",
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
