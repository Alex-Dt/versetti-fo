import Head from "next/head";
import { Box, Stack, Typography, Button, Chip, List, ListItem } from "@mui/material";
import { Container } from "../../components/Container";
import { jobsData } from "../../data/jobs";
import { useRouter } from "next/router";
import { LinkedIn } from "@mui/icons-material";
import { FormDialog } from "../../components/FormDialog";

export default function JobPage({ job }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!job) {
    return <div>Job not found</div>;
  }

  const jobUrl = `https://versetti.co/jobs/${job.slug}`;
  const description = `Join Versetti Family Office as ${job.title} in ${job.location}. ${job.types.join(", ")} position available.`;

  return (
    <>
      <Head>
        <title>{job.title} - Versetti Family Office</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${job.title}, careers, jobs, ${job.location}, ${job.types.join(", ")}, versetti family office`} />

        <meta property="og:title" content={`${job.title} - Versetti Family Office`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://versetti.co/og.jpg" />
        <meta property="og:url" content={jobUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Versetti Family Office" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${job.title} - Versetti Family Office`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://versetti.co/og.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "JobPosting",
              title: job.title,
              description: description,
              datePosted: new Date().toISOString().split("T")[0],
              employmentType: job.types,
              jobLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: job.location,
                },
              },
              hiringOrganization: {
                "@type": "Organization",
                name: "Versetti Family Office",
                sameAs: "https://versetti.co",
              },
              url: jobUrl,
            }),
          }}
        />
      </Head>

      <Box component="section">
        <Container>
          <Stack
            sx={{
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
            <Stack gap={2}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: 32,
                    sm: 48,
                  },
                  textAlign: "left",
                }}
              >
                {job.title}
              </Typography>

              <Stack direction="row" gap={1} flexWrap="wrap">
                <Chip label={job.location} variant="outlined" />
                {job.types.map((type, index) => (
                  <Chip key={index} label={type} variant="outlined" />
                ))}
              </Stack>
            </Stack>

            <Box
              sx={{
                "& h3": {
                  mt: 4,
                  mb: 2,
                  fontWeight: 600,
                },
                "& p": {
                  mb: 2,
                  lineHeight: 1.7,
                },
                "& ul": {
                  mb: 3,
                },
                "& li": {
                  mb: 1,
                  lineHeight: 1.6,
                },
              }}
            >
              {job.content.sections.map((section, index) => {
                switch (section.type) {
                  case "heading":
                    return (
                      <Typography key={index} variant="h3" sx={{ mb: 2, mt: index > 0 ? 4 : 0 }}>
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
                      <List key={index} sx={{ mb: 2 }}>
                        {section.items.map((item, itemIndex) => (
                          <ListItem key={itemIndex} sx={{ display: "list-item", listStyle: "disc", listStylePosition: "inside" }}>
                            {item}
                          </ListItem>
                        ))}
                      </List>
                    );
                  default:
                    return null;
                }
              })}
            </Box>

            <Stack flexDirection={"row"} gap={1}>
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
        </Container>
      </Box>
    </>
  );
}

export async function getStaticPaths() {
  const paths = jobsData.map((job) => ({
    params: { id: job.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const jobIndex = jobsData.findIndex((job) => job.slug === params.id);
  const job = jobsData[jobIndex] || null;

  if (!job) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      job,
      jobIndex,
    },
  };
}
