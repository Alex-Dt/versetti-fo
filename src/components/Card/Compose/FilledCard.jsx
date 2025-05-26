import { Card, Stack } from "@mui/material";

export const FilledCard = ({ icon, height }) => {
  return (
    <Card
      sx={{
        flex: 1,
        alignItems: "center",
        display: "flex",
        borderRadius: "30px",
        svg: {
          maxWidth: "100%",
          height: {
            xs: 40,
            sm: height,
          },
        },
      }}
    >
      <Stack p={10} flex={1} direction={"row"} justifyContent={"center"}>
        {icon}
      </Stack>
    </Card>
  );
};
