import { useState, useRef, useCallback } from "react";
import { Box, Button, Stack, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Container } from "../Container";
import { ContactForm } from "../ContactForm";
import { PrioritiesContent } from "../PrioritiesContent";
import { TwitterXIcon } from "../../assets/socials/twitterXIcon";
import { LinkedInIcon } from "../../assets/socials/linkedInIcon";

const socials = [
  {
    icon: <LinkedInIcon height={33} />,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/angelversetti/",
  },
  {
    icon: <TwitterXIcon height={33} />,
    title: "TwitterX",
    href: "https://x.com/angelversetti",
  },
];

export const Footer = () => {
  const [isAccordionExpanded, setIsAccordionExpanded] = useState(false);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const accordionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const hasPrioritiesRead = isAccordionExpanded && hasScrolledToBottom;

  const handleAccordionChange = (event, expanded) => {
    setIsAccordionExpanded(expanded);
    if (expanded) {
      setShowWarning(false);
    }
  };

  const handleScroll = useCallback((e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 20;
    if (isAtBottom && !hasScrolledToBottom) {
      setHasScrolledToBottom(true);
    }
  }, [hasScrolledToBottom]);

  const triggerWarning = useCallback(() => {
    setShowWarning(true);
    setIsShaking(true);
    
    if (!isAccordionExpanded) {
      setIsAccordionExpanded(true);
    }
    
    setTimeout(() => {
      accordionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
    
    setTimeout(() => {
      setIsShaking(false);
    }, 600);
  }, [isAccordionExpanded]);

  return (
    <Box component={"footer"} id="contact" bgcolor={"#171521"}>
      <Container>
        <Stack
          sx={{
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            pt: {
              xs: "56px",
              sm: "151px",
            },
            pb: {
              xs: "56px",
              sm: "151px",
            },
          }}
          gap={4}
        >
          <Stack sx={{ flex: { xs: 1, sm: "0 0 30%" } }}>
            <Stack
              sx={{
                maxWidth: {
                  sm: "100%",
                  xs: "100%",
                },
                flex: 1,
              }}
            >
              <Typography variant={"h2"}>Get in touch</Typography>
              <Stack
                sx={{
                  mt: {
                    xs: 1,
                    sm: 0,
                  },
                  mb: {
                    xs: 2,
                    sm: 3,
                  },
                  justifyContent: {
                    xs: "center",
                    sm: "flex-start",
                  },
                }}
                direction={"row"}
                gap={1}
              >
                {socials.map((social) => {
                  return (
                    <Button
                      key={social.title}
                      variant={"contained"}
                      href={social.href}
                      target={"_blank"}
                      sx={{
                        background: "#1C1A2A",
                        boxShadow: "none",
                        borderRadius: "10px",
                        color: "#fff",
                        width: "52px",
                        minWidth: "52px",
                        height: "48px",
                        "&:hover": {
                          background: "#3A3D578A",
                        },
                      }}
                    >
                      {social.icon}
                    </Button>
                  );
                })}
              </Stack>
              <Typography
                sx={{
                  textAlign: "justify",
                  display: {
                    xs: "none",
                    sm: "flex",
                  },
                  fontSize: 16,
                  opacity: 0.5,
                }}
                color={"#837BBE"}
                mt={"auto"}
              >
                Versetti Family Office via its affiliate companies shall not be
                responsible or liable for any content of this website or any
                communications sent from any e-mail address of this domain.
                VERSETTI.CO All rights reserved.
              </Typography>
            </Stack>
          </Stack>
          <Stack sx={{ flex: { xs: 1, sm: "0 0 70%" } }} gap={3}>
            <Box
              ref={accordionRef}
              className={isShaking ? "shake-animation" : ""}
            >
              <Accordion
                expanded={isAccordionExpanded}
                onChange={handleAccordionChange}
                sx={{
                  background: "rgba(28, 26, 42, 0.8)",
                  borderRadius: "16px !important",
                  border: showWarning ? "2px solid #f44336" : "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "border-color 0.3s ease",
                  "&:before": { display: "none" },
                  "&.Mui-expanded": {
                    margin: 0,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                  sx={{
                    borderRadius: "16px",
                    "&:hover": {
                      background: "rgba(255, 255, 255, 0.05)",
                    },
                  }}
                >
                  <Stack direction="row" alignItems="center" gap={1}>
                    <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                      View Our Priorities
                    </Typography>
                    {hasPrioritiesRead && (
                      <CheckCircleIcon sx={{ color: "#4CAF50", fontSize: 20 }} />
                    )}
                  </Stack>
                </AccordionSummary>
                <AccordionDetails
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  sx={{
                    maxHeight: "400px",
                    overflowY: "auto",
                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                    "&::-webkit-scrollbar": {
                      width: "6px",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "3px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "rgba(255, 255, 255, 0.2)",
                      borderRadius: "3px",
                    },
                  }}
                >
                  <PrioritiesContent />
                  {isAccordionExpanded && !hasScrolledToBottom && (
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: "#FFC107",
                        fontSize: "16px",
                        mt: 2,
                        pb: 1,
                      }}
                    >
                      ↓ Please scroll down to read all priorities ↓
                    </Typography>
                  )}
                </AccordionDetails>
              </Accordion>
              {showWarning && (
                <Typography
                  sx={{
                    color: "#f44336",
                    fontSize: "16px",
                    mt: 1,
                    fontWeight: 500,
                  }}
                >
                  ⚠️ Please read our priorities before submitting. Open the section above and scroll to the bottom.
                </Typography>
              )}
            </Box>
            <Typography
              sx={{
                fontSize: "16px",
                opacity: 0.7,
                color: hasPrioritiesRead ? "#4CAF50" : "#FFC107",
              }}
            >
              {hasPrioritiesRead
                ? "✓ You have reviewed our priorities"
                : "⚠️ Please open and read our priorities before submitting"}
            </Typography>
            <ContactForm
              prioritiesRead={hasPrioritiesRead}
              onPrioritiesWarning={triggerWarning}
            />
          </Stack>
          <Stack>
            <Typography
              sx={{
                display: {
                  xs: "flex",
                  sm: "none",
                },
                opacity: 0.5,
                fontSize: 13,
                textAlign: "justify",
              }}
              color={"#837BBE"}
              mt={4}
            >
              Versetti Family Office via its affiliate companies shall not be
              responsible or liable for any content of this website or any
              communications sent from any e-mail address of this domain.
              VERSETTI.CO All rights reserved.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
