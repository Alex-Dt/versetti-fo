import {
  Box,
  Button,
  Card,
  Chip,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { Bag } from "../../assets/images/jobs/Bag";
import { Container } from "../../components/Container";
import { JobsCard } from "../../components/JobsCard";
import { jobsData } from "../../data/jobs";

export const Jobs = () => {
  return (
    <Stack>
      <Box component="section">
        <Container>
          <Stack
            gap={3}
            sx={{
              maxWidth: 1200,
              pt: {
                xs: "115px",
                sm: "240px",
              },
              pb: {
                xs: "56px",
                sm: "86px",
              },
            }}
          >
            <Stack>
              <Stack
                sx={{
                  mb: {
                    xs: "37px",
                    sm: 0,
                  },
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                  },
                  alignItems: {
                    xs: "center",
                    sm: "flex-start",
                  },
                  gap: 3,
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant={"h1"}
                  sx={{
                    fontSize: {
                      xs: 37,
                      sm: 77,
                    },
                    textAlign: {
                      xs: "center",
                      sm: "left",
                    },
                  }}
                >
                  Open roles
                </Typography>
                <Bag />
              </Stack>
              <Typography
                sx={{
                  pr: {
                    xs: 0,
                    sm: 0,
                    md: "288px",
                  },
                  pt: {
                    xs: 0,
                    sm: "30px",
                    md: 0,
                  },
                  fontSize: {
                    xs: "19px",
                    sm: "22px",
                  },
                  textAlign: "justify",
                }}
              >
                Versetti Family Office, founded by serial entrepreneur Angel
                Versetti, focuses on nurturing bold deep-tech ventures with
                funding, strategic guidance, and operational support. We
                prioritize longevity startups and R&D projects aimed at solving
                aging to increase human lifespan and healthspan. Our mission is
                to ultimately help humanity reach new heights and achieve
                longer, healthier lives.
              </Typography>
              <Stack
                sx={{
                  mt: "34px",
                  gap: "17px",
                }}
              >
                {jobsData.map((job, index) => (
                  <JobsCard key={`job_${index}`} job={job} />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
};
