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
    error: {
      formError: null,
    },
  });
  const recaptchaRef = useRef(null);

  const handleChange = ({ e, maxLength, customName }) => {
    const { name, value } = e.target;
    if (!!value && value.length > maxLength) {
      setFormData({
        ...formData,
        [name]: value,
        error: {
          ...formData.error,
          [name]: `${String(customName ?? name)
            .charAt(0)
            .toUpperCase()}${String(customName ?? name).slice(1)} value exceeds the maximum length of ${maxLength}.`,
        },
      });
    } else {
      if (!!formData.error?.[name]) {
        delete formData.error[name];
      }
      setFormData({
        ...formData,
        [name]: value,
        error: formData.error,
      });
    }
  };

  const errorArray = Object.keys(formData.error);

  const clearArr = errorArray.filter((key) => key !== "formError");

  const submitDisable = clearArr.length > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setSendFlag(true);
    setSuccess(null);
    setFormData((prev) => {
      return { ...formData, error: { ...prev.error, formError: null } };
    });

    if (submitDisable) {
      setFormData((prev) => {
        return { ...formData, error: { ...prev.error, formError: "Please fill all fields correctly." } };
      });
      setSendFlag(false);
      return;
    }

    if (CONFIG.GOOGLE_SITE_KEY) {
      const recaptchaValue = recaptchaRef.current.getValue();
      if (!recaptchaValue) {
        setFormData((prev) => {
          return { ...formData, error: { ...prev.error, formError: "Please complete the reCAPTCHA verification." } };
        });
        setSendFlag(false);
        return;
      }
    }

    if (vacancy && formData.resumeLink.trim() === "") {
      setSendFlag(false);
      setFormData((prev) => {
        return {
          ...formData,
          error: {
            ...prev.error,
            formError: "Please complete resume link field",
          },
        };
      });
      return;
    }

    const submissionData = {
      name: formData.name,
      email: formData.email,
      message: formData.message.slice(0, 1000),
      ...(vacancy && { vacancy, resumeLink: formData.resumeLink }),
    };

    try {
      // Google Sheets integration (primary - always runs)
      let sheetsSuccess = false;
      if (CONFIG.GOOGLE_EXCEL_KEY) {
        try {
          const sheetsResponse = await fetch(
            `https://script.google.com/macros/s/${CONFIG.GOOGLE_EXCEL_KEY}/exec`,
            {
              method: "POST",
              body: JSON.stringify(submissionData),
            }
          );
          const sheetsResult = await sheetsResponse.json();
          sheetsSuccess = sheetsResult.success;
          console.log("Google Sheets response:", sheetsResult);
        } catch (sheetsError) {
          console.error("Google Sheets error:", sheetsError);
        }
      }

      // AWS SES integration (secondary - runs in parallel, doesn't block success)
      if (CONFIG.API_ENDPOINT) {
        fetch(`${CONFIG.API_ENDPOINT}/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        })
          .then((res) => res.json())
          .then((result) => console.log("SES response:", result))
          .catch((err) => console.error("SES error:", err));
      }

      // Success is determined by Google Sheets (primary)
      if (sheetsSuccess) {
        setSuccess("Thank you! Your message was sent!");
        setFormData({ name: "", email: "", message: "", resumeLink: "", error: { formError: null } });
        if (recaptchaRef.current) recaptchaRef.current.reset();
      } else if (!CONFIG.GOOGLE_EXCEL_KEY) {
        // Fallback: if no Google Sheets key, show error
        setFormData((prev) => {
          return { ...formData, error: { ...prev.error, formError: "Form submission is not configured. Please contact us directly." } };
        });
      } else {
        setFormData((prev) => {
          return { ...formData, error: { ...prev.error, formError: "Something went wrong! Please try again." } };
        });
      }

      setSendFlag(false);
    } catch (error) {
      console.error("Contact form error:", error);
      setFormData({
        ...formData,
        error: { formError: "Failed to send message. Please try again later." },
      });
      setSendFlag(false);
    }
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      <Stack gap={2}>
        {isSuccess && <Stack sx={{ color: "success.main" }}>{isSuccess}</Stack>}
        {/* {formData.error && <Stack sx={{ color: "error.main" }}>{formData.error}</Stack>} */}
        {errorArray.length > 0 && (
          <Stack>
            {errorArray
              .filter((error) => typeof formData.error[error] === "string" && formData.error[error].trim() !== "")
              .map((errorKey) => (
                <Stack sx={{ color: "error.main", listStyleType: "disc", display: "list-item", listStylePosition: "inside" }} key={errorKey}>
                  {formData.error[errorKey]}
                </Stack>
              ))}
          </Stack>
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
            onChange={(e) => handleChange({ e, maxLength: 100 })}
            required
            value={formData.email}
            sx={{
              borderRadius: "30px",
              flex: 1,
            }}
            slotProps={{
              input: {
                disableUnderline: true,
                sx:
                  type === "vacancy" &&
                  {
                    // border: "2px solid #ffffff1f",
                    // borderRadius: "15px!important",
                  },
              },
              root: {
                // sx: {
                //   border: "1px solid #fff",
                // },
              },
            }}
            variant="filled"
          />
          <TextField
            id="name"
            name="name"
            onChange={(e) => handleChange({ e, maxLength: 100 })}
            required
            value={formData.name}
            label="Name"
            slotProps={{
              input: {
                disableUnderline: true,
                sx:
                  type === "vacancy" &&
                  {
                    // border: "2px solid #ffffff1f",
                    // borderRadius: "15px!important",
                  },
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
            onChange={(e) => handleChange({ e, maxLength: 100 })}
            value={vacancy}
            label="Vacancy"
            slotProps={{
              input: {
                disableUnderline: true,
                sx:
                  type === "vacancy" &&
                  {
                    // border: "2px solid #ffffff1f",
                    // borderRadius: "15px!important",
                  },
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
          onChange={(e) => handleChange({ e, maxLength: 1000 })}
          value={formData.message}
          multiline
          slotProps={{
            input: {
              disableUnderline: true,
              sx:
                type === "vacancy" &&
                {
                  // border: "2px solid #ffffff1f",
                  // borderRadius: "15px!important",
                },
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
            required
            name="resumeLink"
            onChange={(e) => handleChange({ e, maxLength: 100, customName: "Resume PDF link" })}
            value={formData.resumeLink}
            label="Resume PDF link"
            // placeholder="Example: https://versetti.co/"
            slotProps={{
              input: {
                disableUnderline: true,
                sx:
                  type === "vacancy" &&
                  {
                    // border: "2px solid #ffffff1f",
                    // borderRadius: "15px!important",
                  },
              },
            }}
            sx={{
              borderRadius: "30px",
              flex: 1,
            }}
            variant="filled"
          />
        )}
        {CONFIG.GOOGLE_SITE_KEY && (
          <Stack sx={{ flexDirection: "row", justifyContent: "center", mb: 1 }}>
            <ReCAPTCHA ref={recaptchaRef} sitekey={CONFIG.GOOGLE_SITE_KEY} theme="dark" />
          </Stack>
        )}
        <Stack>
          <Button type={"submit"} disabled={submitDisable} variant={"contained"} size={"large"} loading={isSending} sx={{ fontWeight: "700", borderRadius: "30px", background: "#fff" }}>
            SUBMIT
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
