import { Box, Button, Stack, TextField } from "@mui/material";

export const ContactForm = () => {
  return (
    <Box
      component={"form"}
      onSubmit={(e) => {
        e.preventDefault();
        console.log("sent");
      }}
    >
      <Stack gap={2}>
        <Stack direction={"row"} gap={2}>
          <TextField
            id="email"
            label="Email"
            slotProps={{
              input: {
                disableUnderline: true,
              },
            }}
            sx={{
              borderRadius: "30px",
              flex: 1,
            }}
            variant="filled"
          />
          <TextField
            id="name"
            label="Name"
            slotProps={{
              input: {
                disableUnderline: true,
              },
            }}
            sx={{
              borderRadius: "30px",
              flex: 1,
            }}
            variant="filled"
          />
        </Stack>
        <TextField
          label="Message"
          multiline
          slotProps={{
            input: {
              disableUnderline: true,
            },
          }}
          sx={{
            borderRadius: "30px",
            flex: 1,
          }}
          rows={10}
          fullWidth
          variant="filled"
          placeholder="Limit to 1000 characters"
        />
        <Stack>
          <Button
            variant={"contained"}
            size={"large"}
            sx={{ fontWeight: "700", borderRadius: "30px" }}
            disabled
          >
            SUBMIT
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
