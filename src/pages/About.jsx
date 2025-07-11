import { Helmet } from "react-helmet";
import ServiceAreas from "../components/ServiceArea";

export default function About() {

  return (
    <main role="main" className="min-h-screen text-gray-800 px-4 py-12">
      <Helmet>
        <title>About Grey Techs | Small Business IT Specialists in Ohio</title>
        <meta
          name="description"
          content="Learn about Grey Techs — a field-tested IT company dedicated to providing dependable technology services across Ohio."
        />
        <meta property="og:title" content="About Grey Techs" />
        <meta
          property="og:description"
          content="Get to know our mission, values, and how we deliver expert tech solutions with personal service."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://greytechs.com/about" />
        <link rel="canonical" href="https://greytechs.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Page Section */}
      <ServiceAreas />
    </main>
  );
}