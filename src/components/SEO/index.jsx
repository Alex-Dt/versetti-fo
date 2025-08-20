import { Helmet } from "react-helmet";

const siteConfig = {
  title: "Versetti Family Office",
  description: "Professional family office services and wealth management solutions",
  url: "https://versetti.com",
  image: "/og.jpg",
  author: "Versetti Family Office",
  keywords: "family office, wealth management, investment, financial services",
};

export const SEO = ({ title, description, keywords, image, url, type = "website" }) => {
  const seoTitle = title || siteConfig.title;
  const seoDescription = description || siteConfig.description;
  const seoKeywords = keywords || siteConfig.keywords;
  const seoImage = image || siteConfig.image;
  const seoUrl = url || siteConfig.url;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={siteConfig.author} />
      <link rel="canonical" href={seoUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:site_name" content={siteConfig.title} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  );
};
