import { List, ListItem, Typography } from "@mui/material";

export const jobsData = [
  {
    title: "Chief Scientific Officer",
    location: "Dubai, London, Moscow",
    types: ["Remote", "Full-time"],
    linkedIn: "https://www.linkedin.com/jobs/view/4284768400/",
    content: (
      <>
        <Typography variant={"h3"}>Role Description</Typography>
        <Typography>
          This is a full-time remote role for a Chief Scientific Officer (Longevity). The Chief Scientific Officer will be responsible for overseeing the research and development processes, leading
          scientific research initiatives, managing laboratory activities, and coordinating with medical and scientific professionals. The role involves strategic planning, guiding the scientific
          direction of projects, and ensuring the alignment of research outcomes with business goals. CSO will also help run technical DD on startups and projects and validate them, tracking their
          scientific/technological progress.
        </Typography>
        <Typography variant={"h3"}>Qualifications</Typography>
        <List>
          <ListItem>Lifelong passion about longevity, as demonstrated by professional and academic background</ListItem>
          <ListItem>Research and Development (R&D) and Research skills</ListItem>
          <ListItem>Science and Medicine proficiency</ListItem>
          <ListItem>Laboratory Skills</ListItem>
          <ListItem>Strong leadership and management abilities</ListItem>
          <ListItem>Excellent communication and collaboration skills</ListItem>
          <ListItem>Strategic thinking and problem-solving capabilities</ListItem>
          <ListItem>Experience in the longevity industry is a plus</ListItem>
          <ListItem>Ph.D. or M.D. in relevant scientific disciplines</ListItem>
        </List>
      </>
    ),
  },
  {
    title: "Public Relations Manager",
    location: "Dubai, London, Moscow",
    types: ["Remote", "Full-time"],
    linkedIn: "https://www.linkedin.com/jobs/view/4284767534/",
    content: (
      <>
        <Typography variant={"h3"}>Role Description</Typography>
        <Typography>
          This is a full-time remote role for a Virtual Assistant. The Virtual Assistant will handle a variety of administrative tasks, such as managing schedules, coordinating meetings, handling
          correspondence, and performing research. In addition, the role includes data entry, document management, and providing general support to executives and team members. The ideal candidate
          will be highly organized, capable of multitasking, and comfortable working independently in a virtual environment.
        </Typography>
        <Typography variant={"h3"}>Specific responsibilities</Typography>
        <List>
          <ListItem>Develop personal brand and PR strategy for the Founder</ListItem>
          <ListItem>
            Media and speaking opportunities. Reaching out to existing, and seeking out new, media outlets and events to profile the Founder as thought leader or secure a speaking opportunity
          </ListItem>
          <ListItem>Drafting of documents based on key bulletpoints</ListItem>
          <ListItem>Negotiating any commercial deals with the advantage to the founder</ListItem>
          <ListItem>Other administrative or logistical tasks related to the broader operations of the fund and its projects may be given at any point of time</ListItem>
        </List>
        <Typography variant={"h3"}>Qualifications</Typography>
        <List>
          <ListItem>Network and Charisma</ListItem>
          <ListItem>Strong communication skills</ListItem>
          <ListItem>Existing relationships that would permit to get relevant exposure and opportunities with more economic efficiency</ListItem>
          <ListItem>Perfect English is a must. Working/native knowledge of other major global languages is a plus</ListItem>
          <ListItem>Experience working with a team in a non-corporate environment. We do NOT have various standard corporate processes in place!</ListItem>
        </List>
        <Typography variant={"h3"}>Benefits</Typography>
        <List>
          <ListItem>A competitive remuneration</ListItem>
          <ListItem>In case of travel to events, budgets to cover basic fare and accommodation costs</ListItem>
          <ListItem>Access to high profile networks and invitation-only events, where appropriate</ListItem>
          <ListItem>Opportunity to transition to higher responsibility positions after proven results and loyalty</ListItem>
        </List>
      </>
    ),
  },
];
