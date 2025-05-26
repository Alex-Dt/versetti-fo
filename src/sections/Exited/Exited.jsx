import { Box, Grid, Stack, Typography } from "@mui/material";
import { Container } from "../../components/Container";

export const Exited = () => {
  return (
    <Box>
      <Container>
        <Stack mb={"128px"}>
          <Typography variant={"h2"} mb={"8px"}>
            Exited
          </Typography>
          <Grid gridTemplateColumns="repeat(5,1fr)"></Grid>
        </Stack>
      </Container>
    </Box>
  );
};
