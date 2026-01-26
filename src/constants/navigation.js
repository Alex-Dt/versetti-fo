import { jobsData } from "../data/jobs";

export const Menu = [
  {
    title: "Mission",
    href: "/#mission",
    id: "mission",
  },
  {
    title: "Activities",
    href: "/#activities",
    id: "activities",
  },
  {
    title: "Founder",
    href: "/#founder",
    id: "founder",
  },
  {
    title: "Portfolio",
    href: "/#portfolio",
    id: "portfolio",
  },
  {
    title: "Contact",
    href: "#contact",
    id: "contact",
  },
  {
    title: "Thesis",
    href: "/thesis",
    id: "thesis",
  },
  {
    title: `Jobs (${jobsData?.length ?? 0})`,
    href: "/jobs",
    id: "jobs",
  },
];
