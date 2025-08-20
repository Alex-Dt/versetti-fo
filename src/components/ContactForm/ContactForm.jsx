import { Box, Button, Stack, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { CONFIG } from "../../constants/config";
import ReCAPTCHA from "react-google-recaptcha";

export const ContactForm = ({ type, vacancy }) => {
  const [isSending, setSendFlag] = useState(false);
  const [isSuccess, setSuccess] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    resumeLink: "",
    error: null,
  });
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSendFlag(true);
    setSuccess(null);
    setFormData({ ...formData, error: null });

    if (CONFIG.VITE_GOOGLE_SITE_KEY) {
      const recaptchaValue = recaptchaRef.current.getValue();
      if (!recaptchaValue) {
        setFormData({ ...formData, error: "Please complete the reCAPTCHA verification." });
        setSendFlag(false);
        return;
      }
    }

    try {
      // Use the AWS API Gateway endpoint
      const apiEndpoint = CONFIG.VITE_API_ENDPOINT;

      // Debug logging
      console.log("API Endpoint:", apiEndpoint);
      console.log("Form data being sent:", {
        name: formData.name,
        email: formData.email,
        message: formData.message.slice(0, 1000),
        ...(vacancy && { vacancy, resumeLink: formData.resumeLink }),
      });

      const requestBody = JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message.slice(0, 1000),
        ...(vacancy && { vacancy }),
      });

      console.log("Request body:", requestBody);
      console.log("Request body length:", requestBody.length);

      const response = await fetch(`${apiEndpoint}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      });

      const result = await response.json();

      // Debug logging
      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);
      console.log("Response result:", result);
      console.log("Result success:", result.success);

      if (response.ok && response.status === 200) {
        setSuccess("Thank you! Your message was sent!");
        setFormData({ name: "", email: "", message: "", error: null });
        if (recaptchaRef.current) recaptchaRef.current.reset();
      } else {
        console.log("Error condition triggered");
        setFormData({
          ...formData,
          error: result.error || "Something went wrong! Please try again.",
        });
      }

      setSendFlag(false);
    } catch (error) {
      console.error("Contact form error:", error);
      setFormData({
        ...formData,
        error: "Failed to send message. Please try again later.",
      });
      setSendFlag(false);
    }
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      <Stack gap={2}>
        {isSuccess && <Stack sx={{ color: "success.main" }}>{isSuccess}</Stack>}
        {formData.error && <Stack sx={{ color: "error.main" }}>{formData.error}</Stack>}
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
        {type === "vacancy" && (
          <TextField
            id="vacancy"
            name="vacancy"
            required
            disabled
            onChange={handleChange}
            value={vacancy}
            label="Vacancy"
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
        )}
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
            htmlInput: {
              maxLength: 1000,
            },
          }}
          sx={{
            borderRadius: "30px",
            flex: 1,
          }}
          rows={type === "vacancy" ? 6 : 10}
          fullWidth
          variant="filled"
          placeholder="Limit to 1000 characters"
        />
        {type === "vacancy" && (
          <TextField
            id="resumeLink"
            name="resumeLink"
            onChange={handleChange}
            value={formData.resumeLink}
            label="Resume link"
            // placeholder="Example: https://versetti.co/"
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
        )}
        <Stack sx={{ flexDirection: "row", justifyContent: "center", mb: 1 }}>
          <ReCAPTCHA ref={recaptchaRef} sitekey={CONFIG.VITE_GOOGLE_SITE_KEY} theme="dark" />
        </Stack>
        <Stack>
          <Button type={"submit"} variant={"contained"} size={"large"} loading={isSending} sx={{ fontWeight: "700", borderRadius: "30px", background: "#fff" }}>
            SUBMIT
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
