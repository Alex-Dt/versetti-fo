import Head from "next/head";
import { Box, Stack, Typography, Divider } from "@mui/material";
import { Container } from "../components/Container";

const PrioritySection = ({ title, color, items }) => (
  <Box sx={{ mb: 5 }}>
    <Typography
      variant="h3"
      sx={{
        mb: 3,
        color: color,
        fontSize: {
          xs: "20px",
          sm: "26px",
        },
      }}
    >
      {title}
    </Typography>
    <Stack gap={3}>
      {items.map((item, index) => (
        <Box key={index}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: "17px",
                sm: "19px",
              },
              mb: 1,
            }}
          >
            {item.name}
          </Typography>
          {item.description && (
            <Typography
              sx={{
                fontSize: {
                  xs: "15px",
                  sm: "17px",
                },
                opacity: 0.85,
                lineHeight: 1.6,
              }}
            >
              {item.description}
            </Typography>
          )}
        </Box>
      ))}
    </Stack>
  </Box>
);

const highPriorityItems = [
  {
    name: "Tissue, and Organ Reconstruction",
    description: "Scalable regeneration technologies, including in situ tissue renewal, organoids, and organ replacement strategies.",
  },
  {
    name: "Advanced Delivery and Clearance Technologies",
    description: "Organ-targeted delivery, BBB-crossing systems, organelle-level targeting, and platforms removing accumulated biological waste.",
  },
  {
    name: "Immune Rejuvenation and Epigenetic Therapies",
    description: "Scalable interventions that can be applied across multiple age-related conditions.",
  },
  {
    name: "Mitochondrial Repair & Maintenance",
    description: "Translatable approaches to mitophagy, mitochondrial biogenesis, and mtDNA stability with multi-indication potential.",
  },
  {
    name: "Enabling Technologies",
    description: "Platforms useful across the entire longevity ecosystem: organ-on-chip systems, microphysiological testbeds, advanced drug-screening platforms, precision delivery systems, and supportive biomanufacturing tools.",
  },
  {
    name: "Cryopreservation & Biostasis",
    description: "Technologies with broad applicability to cells, tissues, and organs.",
  },
  {
    name: "Brain Replacement",
    description: null,
  },
  {
    name: "Artificial Blood",
    description: null,
  },
  {
    name: "Longevity Therapies for Animals",
    description: "Veterinary rejuvenation technologies that mirror human-directed longevity approaches and are scalable across multiple indications.",
  },
];

const selectivePriorityItems = [
  {
    name: "Targeted Cellular Senescence Modulation",
    description: "Only precise, biomarker-validated approaches with clear therapeutic translation.",
  },
  {
    name: "Genomic Stability & Proteostasis",
    description: "Translational tools addressing multiple disorders, backed by safety and off-target data.",
  },
];

const lowerPriorityItems = [
  {
    name: "Non-scalable Single-Indication Drugs",
    description: "Solutions targeting only one narrowly defined disease or application.",
  },
  {
    name: "Xenotransplantation and AI-enabled Discovery",
    description: "Considered only when accompanied by intermediate commercializable tools or full wet-lab validation.",
  },
  {
    name: "Metabolic Modulation",
    description: "Novel, differentiated mechanisms beyond traditional nutraceutical pathways.",
  },
];

export default function PrioritiesPage() {
  return (
    <>
      <Head>
        <title>Priorities - Versetti Family Office</title>
        <meta
          name="description"
          content="We are looking for early-stage longevity start-ups and potential IP spin-outs. Learn about our investment priorities in longevity research."
        />
        <meta name="keywords" content="longevity, startups, investment, biotech, aging research, family office" />
        <meta property="og:title" content="Priorities - Versetti Family Office" />
        <meta
          property="og:description"
          content="We are looking for early-stage longevity start-ups and potential IP spin-outs. Learn about our investment priorities in longevity research."
        />
        <meta property="og:image" content="https://versetti.co/og.jpg" />
        <meta property="og:url" content="https://versetti.co/priorities" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Priorities - Versetti Family Office" />
        <meta
          name="twitter:description"
          content="We are looking for early-stage longevity start-ups and potential IP spin-outs. Learn about our investment priorities in longevity research."
        />
        <meta name="twitter:image" content="https://versetti.co/og.jpg" />
      </Head>

      <Stack>
        <Box component="section">
          <Container>
            <Stack
              gap={3}
              sx={{
                maxWidth: 900,
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
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: 37,
                    sm: 77,
                  },
                  textAlign: {
                    xs: "center",
                    sm: "left",
                  },
                  mb: 2,
                }}
              >
                Priorities
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: "17px",
                    sm: "20px",
                  },
                  lineHeight: 1.7,
                  textAlign: "justify",
                  mb: 4,
                }}
              >
                We are looking for early-stage longevity start-ups and potential IP spin-outs. Please send us your pitch deck if your company has never been funded before and refers to the following categories:
              </Typography>

              <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)", mb: 4 }} />

              <PrioritySection
                title="High Priority"
                color="#4CAF50"
                items={highPriorityItems}
              />

              <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)", mb: 4 }} />

              <PrioritySection
                title="Selective Priority"
                color="#FFC107"
                items={selectivePriorityItems}
              />

              <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)", mb: 4 }} />

              <PrioritySection
                title="Lower Priority"
                color="#FF9800"
                items={lowerPriorityItems}
              />

              <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)", mb: 4 }} />

              <Box sx={{ mb: 5 }}>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 3,
                    color: "#f44336",
                    fontSize: {
                      xs: "20px",
                      sm: "26px",
                    },
                  }}
                >
                  Not Considered
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "17px",
                    },
                    opacity: 0.85,
                    lineHeight: 1.6,
                  }}
                >
                  Supplements, wellness products, non-actionable diagnostics, general AI discovery without proprietary data or wet lab validation, and non-specific systemic senolytics.
                </Typography>
              </Box>
            </Stack>
          </Container>
        </Box>
      </Stack>
    </>
  );
}
