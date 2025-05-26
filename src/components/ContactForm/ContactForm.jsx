import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { CONFIG } from "../../constants/config";

export const ContactForm = () => {
  const [isSending, setSendFlag] = useState(false);
  const [isSuccess, setSuccess] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSendFlag(true);
    setSuccess(null);
    setFormData({ ...formData, error: null });
    try {
      const response = await fetch(
        `https://script.google.com/macros/s/${CONFIG.VITE_GOOGLE_EXCEL_KEY}/exec`,
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      await setTimeout(() => {}, 2000);

      const result = await response.json();
      if (result.success) {
        setSuccess("Thank you! Your message was sent!");
        setFormData({ name: "", email: "", message: "", error: null });
      } else {
        setFormData({
          ...formData,
          error: "Something went wrong!",
        });
      }

      setSendFlag(false);
    } catch (error) {
      console.error(error);
      setFormData({
        ...formData,
        error: error.message,
      });
      setSendFlag(false);
    }
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      <Stack gap={2}>
        {isSuccess && <Stack sx={{ color: "success.main" }}>{isSuccess}</Stack>}
        {formData.error && (
          <Stack sx={{ color: "error.main" }}>{formData.error}</Stack>
        )}
        <Stack
          sx={{
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
          gap={2}
        >
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email"
            onChange={handleChange}
            required
            value={formData.email}
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
            name="name"
            required
            onChange={handleChange}
            value={formData.name}
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
          name="message"
          required
          onChange={handleChange}
          value={formData.message}
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
            type={"submit"}
            variant={"contained"}
            size={"large"}
            loading={isSending}
            sx={{ fontWeight: "700", borderRadius: "30px", background: "#fff" }}
          >
            SUBMIT
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
