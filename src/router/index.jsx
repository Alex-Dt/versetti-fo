import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";
import { HomePage } from "../pages";
import { SEO } from "../components/SEO";
import { Jobs } from "../pages/Jobs";

const RouteWrapper = ({ children, seoData }) => (
  <>
    <SEO {...seoData} />
    {children}
  </>
);

const routeSEOData = {
  home: {
    title: "Home - Versetti Family Office",
    description:
      "Founded by serial entrepreneur Angel Versetti, our Family Office seeks out the boldest deep tech ventures and nurtures them with funding, strategic guidance, and operational support. We focus especially on longevity startups and R&D projects that serve as pieces of the puzzle to solve aging and increase human lifespan and healthspan",
    keywords: "family office, wealth management, investment advisory, financial planning",
    url: "https://versetti.com/",
  },
  jobs: {
    title: "Careers - Versetti Family Office",
    description: "Join our team at Versetti Family Office. Explore career opportunities in wealth management and financial services",
    keywords: "careers, jobs, family office jobs, wealth management careers",
    url: "https://versetti.com/jobs",
  },
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <RouteWrapper seoData={routeSEOData.home}>
            <HomePage />
          </RouteWrapper>
        ),
      },
      {
        path: "jobs",
        element: (
          <RouteWrapper seoData={routeSEOData.jobs}>
            <Jobs />
          </RouteWrapper>
        ),
      },
    ],
  },
]);
