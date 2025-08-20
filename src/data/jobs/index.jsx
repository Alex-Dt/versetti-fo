import { List, ListItem, Typography } from "@mui/material";

export const jobsData = [
  {
    title: "Business Analyst",
    location: "Greater Delhi Area",
    types: ["Remote", "Full-time"],
    linkedIn:
      "https://www.linkedin.com/jobs/search/?currentJobId=4285827677&f_C=9349071&geoId=92000000&origin=COMPANY_PAGE_JOBS_CLUSTER_EXPANSION&originToLandingJobPostings=4285830556%2C4285824990%2C4285824975%2C4285832381%2C4285830479%2C4285827677",
    content: (
      <>
        <Typography variant={"h3"}>Role Description</Typography>
        <Typography>
          This is a full-time remote role for a Business Analyst. The Business Analyst will be responsible for analyzing business processes, identifying business requirements, and providing strategic
          recommendations. Daily tasks include conducting business analysis, preparing detailed reports, and collaborating with various teams to implement effective business solutions. The role
          requires strong analytical skills and effective communication to support the organization's goals.
        </Typography>
        <Typography variant={"h3"}>Qualifications</Typography>
        <List>
          <ListItem>Analytical Skills and Business Analysis experience</ListItem>
          <ListItem>Expertise in Business Process and identifying Business Requirements</ListItem>
          <ListItem>Strong Communication skills</ListItem>
          <ListItem>Excellent problem-solving abilities and attention to detail</ListItem>
          <ListItem>Ability to work independently and remotely</ListItem>
          <ListItem>Experience in the technology or healthcare industry is a plus</ListItem>
          <ListItem>Bachelor's degree in Business Administration, Information Technology, or a related field</ListItem>
        </List>
      </>
    ),
  },
  {
    title: "Virtual Assistant",
    location: "Greater Bengaluru Area",
    types: ["Remote", "Full-time"],
    linkedIn:
      "https://www.linkedin.com/jobs/search/?currentJobId=4285824975&f_C=9349071&geoId=92000000&origin=COMPANY_PAGE_JOBS_CLUSTER_EXPANSION&originToLandingJobPostings=4285830556%2C4285824990%2C4285824975%2C4285832381%2C4285830479%2C4285827677",
    content: (
      <>
        <Typography variant={"h3"}>Role Description</Typography>
        <Typography>
          This is a full-time remote role for a Virtual Assistant. The Virtual Assistant will handle a variety of administrative tasks, such as managing schedules, coordinating meetings, handling
          correspondence, and performing research. In addition, the role includes data entry, document management, and providing general support to executives and team members. The ideal candidate
          will be highly organized, capable of multitasking, and comfortable working independently in a virtual environment.
        </Typography>
        <Typography variant={"h3"}>Qualifications</Typography>
        <List>
          <ListItem>Experience in administrative tasks including managing schedules, coordinating meetings, and handling correspondence</ListItem>
          <ListItem>Strong organizational and multitasking skills</ListItem>
          <ListItem>Proficiency in data entry and document management</ListItem>
          <ListItem>Ability to conduct research and provide general support to team members</ListItem>
          <ListItem>Excellent written and verbal communication skills</ListItem>
          <ListItem>High level of comfort working independently and remotely</ListItem>
          <ListItem>Familiarity with virtual communication and collaboration tools such as Slack, Zoom, and Google Workspace</ListItem>
          <ListItem>Prior experience in a similar role is a plus</ListItem>
        </List>
      </>
    ),
  },
];
