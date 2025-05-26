import { Card, Stack } from "@mui/material";

export const FilledCard = ({ icon }) => {
  return (
    <Card
      sx={{
        flex: 1,
        alignItems: "center",
        display: "flex",
        borderRadius: "30px",
      }}
    >
      <Stack p={10} flex={1} direction={"row"} justifyContent={"center"}>
        {icon}
      </Stack>
    </Card>
  );
};
