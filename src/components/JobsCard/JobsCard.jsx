import { Box, Button, Card, Chip, Collapse, Divider, Stack, Typography, List, ListItem } from "@mui/material";
import { Arrow } from "../../assets/images/jobs/Arrow";
import { useState } from "react";
import { LinkedIn, Visibility } from "@mui/icons-material";
import { FormDialog } from "../FormDialog";
import Link from "next/link";

export const JobsCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Card
      sx={{
        borderRadius: "30px",
        position: "relative",
        background: "transparent",
      }}
    >
      <Stack
        className="card"
        onClick={handleToggleClick}
        sx={{
          background: "#519CCE0F",
          "&:hover": {
            background: "#519cce16",
          },
          cursor: "pointer",
          padding: {
            xs: "26px",
            sm: "46px",
          },
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          alignItems: {
            xs: "flex-start",
            sm: "center",
          },
          justifyContent: "space-between",
        }}
      >
        <Stack
          sx={{
            mb: {
              xs: 2,
              sm: 0,
            },
            width: "100%",
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={2}
            sx={{
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "26px",
                  sm: "31px",
                },
                textAlign: {
                  xs: "left",
                },
              }}
              variant={"h2"}
            >
              {job.title}
            </Typography>
            <Button
              sx={{
                display: {
                  xs: "flex",
                  sm: "none",
                },
                minWidth: 0,
                padding: 1,
                color: "#fff",
                pointerEvents: "none",
              }}
              onClick={handleToggleClick}
            >
              <Arrow
                style={{
                  rotate: !expanded ? "0deg" : "180deg",
                  transition: "all 0.2s ease-out",
                }}
              />
            </Button>
          </Stack>

          <Typography
            sx={{
              opacity: 0.5,
              fontSize: {
                xs: "19px",
                sm: "22px",
              },
            }}
          >
            {job.location}
          </Typography>
        </Stack>
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Stack
            sx={{
              flexDirection: "row",
              gap: 1,
            }}
          >
            {job.types.map((type) => (
              <Chip
                key={type}
                label={type}
                sx={{
                  opacity: 0.5,
                }}
                variant="outlined"
              />
            ))}
          </Stack>
          <Button
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              minWidth: 0,
              padding: 1,
              color: "#fff",
              pointerEvents: "none",
            }}
            onClick={handleToggleClick}
          >
            <Arrow
              style={{
                rotate: !expanded ? "0deg" : "180deg",
                transition: "all 0.2s ease-out",
              }}
            />
          </Button>
        </Stack>
      </Stack>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider
          sx={{
            borderWidth: 2,
            borderColor: "#1E1D2E",
          }}
        />
        <Stack
          sx={{
            background: "#519CCE0F",
            padding: {
              xs: "26px",
              sm: "46px",
            },
            h3: {
              mt: 3,
              mb: 1,
            },
            "h3:nth-child(1)": {
              mt: 0,
              mb: 1,
            },
            ul: {
              p: 0,
            },
            li: {
              p: 0,
              mb: 1,
              listStyle: "disc",
              display: "list-item",
              listStylePosition: "inside",
            },
            "& p": {
              fontSize: {
                xs: "19px",
                sm: "22px",
              },
            },
            "& li": {
              fontSize: {
                xs: "19px",
                sm: "22px",
              },
            },
          }}
        >
          {job.content.shortDescription.map((section, index) => {
            switch (section.type) {
              case "heading":
                return (
                  <Typography key={index} variant="h3" sx={{ mb: 1, mt: index > 0 ? 3 : 0 }}>
                    {section.text}
                  </Typography>
                );
              case "paragraph":
                return (
                  <Typography key={index} sx={{ mb: 2 }}>
                    {section.text}
                  </Typography>
                );
              case "list":
                return (
                  <List key={index} sx={{ p: 0, mb: 2 }}>
                    {section.items.map((item, itemIndex) => (
                      <ListItem
                        key={itemIndex}
                        sx={{
                          p: 0,
                          mb: 1,
                          listStyle: "disc",
                          display: "list-item",
                          listStylePosition: "inside",
                          fontSize: {
                            xs: "19px",
                            sm: "22px",
                          },
                        }}
                      >
                        {item}
                      </ListItem>
                    ))}
                  </List>
                );
              default:
                return null;
            }
          })}
          <Stack flexDirection={"row"} gap={1} flexWrap={"wrap"} mt={3}>
            <Link href={`/jobs/${job.slug}`} passHref legacyBehavior>
              <Button
                variant={"outlined"}
                startIcon={<Visibility />}
                sx={{
                  alignItems: "center",
                  color: "#fff",
                  borderColor: "#fff",
                  fontSize: "22px",
                  svg: {
                    fontSize: "32px!important",
                  },
                  p: 0.2,
                  px: 2,
                }}
              >
                <Typography variant="span">View Details</Typography>
              </Button>
            </Link>
            <FormDialog vacancy={job.title} />
            {!!job?.linkedIn && (
              <Button
                variant={"contained"}
                href={job.linkedIn}
                target="_blank"
                startIcon={<LinkedIn />}
                sx={{
                  alignItems: "center",
                  color: "#010101",
                  fontSize: "22px",
                  svg: {
                    fontSize: "32px!important",
                  },
                  p: 0.2,
                  px: 2,
                  backgroundColor: "#fff",
                }}
              >
                <Typography variant="span">Easy Apply</Typography>
              </Button>
            )}
          </Stack>
        </Stack>
      </Collapse>
    </Card>
  );
};
