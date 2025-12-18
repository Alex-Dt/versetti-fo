import { Box, Stack, Typography, Divider } from "@mui/material";

const PrioritySection = ({ title, color, items, compact }) => (
  <Box sx={{ mb: compact ? 2 : 5 }}>
    <Typography
      variant="h3"
      sx={{
        mb: compact ? 1.5 : 3,
        color: color,
        fontSize: compact ? "16px" : { xs: "20px", sm: "26px" },
      }}
    >
      {title}
    </Typography>
    <Stack gap={compact ? 1.5 : 3}>
      {items.map((item, index) => (
        <Box key={index}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: compact ? "16px" : { xs: "17px", sm: "19px" },
              mb: 0.5,
            }}
          >
            {item.name}
          </Typography>
          {item.description && (
            <Typography
              sx={{
                fontSize: compact ? "16px" : { xs: "16px", sm: "18px" },
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

export const PrioritiesContent = ({ compact = true }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: compact ? "16px" : { xs: "18px", sm: "20px" },
          lineHeight: 1.7,
          textAlign: "justify",
          mb: compact ? 2 : 4,
        }}
      >
        We are looking for early-stage longevity start-ups and potential IP spin-outs. Please send us your pitch deck if your company has never been funded before and refers to the following categories:
      </Typography>

      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)", mb: compact ? 2 : 4 }} />

      <PrioritySection
        title="High Priority"
        color="#4CAF50"
        items={highPriorityItems}
        compact={compact}
      />

      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)", mb: compact ? 2 : 4 }} />

      <PrioritySection
        title="Selective Priority"
        color="#FFC107"
        items={selectivePriorityItems}
        compact={compact}
      />

      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)", mb: compact ? 2 : 4 }} />

      <PrioritySection
        title="Lower Priority"
        color="#FF9800"
        items={lowerPriorityItems}
        compact={compact}
      />

      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)", mb: compact ? 2 : 4 }} />

      <Box>
        <Typography
          variant="h3"
          sx={{
            mb: compact ? 1.5 : 3,
            color: "#f44336",
            fontSize: compact ? "16px" : { xs: "20px", sm: "26px" },
          }}
        >
          Not Considered
        </Typography>
        <Typography
          sx={{
            fontSize: compact ? "16px" : { xs: "16px", sm: "18px" },
            opacity: 0.85,
            lineHeight: 1.6,
          }}
        >
          Supplements, wellness products, non-actionable diagnostics, general AI discovery without proprietary data or wet lab validation, and non-specific systemic senolytics.
        </Typography>
      </Box>
    </Box>
  );
};
