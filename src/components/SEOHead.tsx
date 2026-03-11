import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
}

const SEOHead = ({
  title = "Infinity WiFi Connects — Unlimited Connectivity Starts Here",
  description = "Find the best internet, TV & streaming deals from 50+ providers. Call (833) 708-6855 for unbiased recommendations and fast activation across all 50 states.",
  path = "/",
}: SEOHeadProps) => {
  const siteUrl = "https://infinitywificonnects.com";
  const fullUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEOHead;
