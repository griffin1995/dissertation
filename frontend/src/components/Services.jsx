// Import the required styles for the Services component
import "../styles/Services.scss";

// Import the reusable ServiceCard component
import ServiceCard from "../components/ServiceCard"

// Import service icons for use in the service cards
import writing from "../assets/services/writing.svg";
import seo from "../assets/services/seo.svg";
import conversion from "../assets/services/conversion.svg";
import mobile from "../assets/services/mobile.svg";

// The Services component renders a section displaying the various services offered
export function Services() {
  return (
    <div className="canvas-wrapper">
      {/* ServiceCard for Website Redesign */}
      <ServiceCard
        subtitle="Service"
        title1="Website"
        title2="Redesign"
        details="Complete overhaul of outdated websites for a modern, trustworthy feel."
        icon={writing}
      />

      {/* ServiceCard for SEO & Visibility */}
      <ServiceCard
        subtitle="Service"
        title1="SEO"
        title2="& Visibility"
        details="Focus on improving search engine rankings and online visibility."
        icon={seo}
      />

      {/* ServiceCard for Website Conversion */}
      <ServiceCard
        subtitle="Service"
        title1="Website"
        title2="Conversion"
        details="Transform slow, outdated sites into high-performing ones."
        icon={conversion}
      />

      {/* ServiceCard for Mobile Optimization */}
      <ServiceCard
        subtitle="Service"
        title1="Mobile"
        title2="Optimization"
        details="Ensure full functionality and a great user experience on mobile devices."
        icon={mobile}
      />
    </div>
  );
}
