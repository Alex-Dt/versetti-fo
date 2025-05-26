import { Card, Stack, Typography } from "@mui/material";

export const DefaultCard = ({ title, text, icon }) => {
  return (
    <>
      <Card
        variant={"outlined"}
        sx={{
          border: 0,
          flex: 1,
        }}
      >
        <Stack gap={1}>
          <img
            src={icon}
            alt={title}
            style={{
              width: "100%",
              height: 111,
              minHeight: 111,
              objectFit: "contain",
            }}
          />
          <Typography variant={"h3"} textAlign={"center"}>
            {title}
          </Typography>
          <Typography>{text}</Typography>
        </Stack>
      </Card>
    </>
  );
};
