import { personal } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ozias.dev";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    url: siteUrl,
    email: personal.email,
    jobTitle: personal.title,
    description: personal.bio[0],
    sameAs: [personal.github, personal.linkedin, personal.twitter],
    knowsAbout: [
      "Computer Science",
      "Systems Programming",
      "Distributed Systems",
      "Operating Systems",
      "Algorithm Design",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
