// Import the required styles for the Services component
import "../styles/Services.scss";

// Import the reusable ServiceCard component
import ServiceCard from "./ServiceCard";

// Import service icons for use in the service cards
import credibility from "../assets/services/credibility.svg";
import devices from "../assets/services/devices.svg";
import barchart from "../assets/services/barchart.svg";

// The Services component renders a section displaying the various services offered
export function Services() {
  return (
    <div className="canvas-wrapper">
      {/* ServiceCard for Credibility - Modern Websites */}
      <ServiceCard
        subtitle="Credibility"
        title1="Modern"
        title2="Website Design"
        details="Build trust with a visually appealing, secure, and up-to-date website that aligns with the latest trends and standards."
        icon={credibility}
        alignLeft={true}
      />

      {/* ServiceCard for Usability - All Devices */}
      <ServiceCard
        subtitle="Usability"
        title1="Optimized"
        title2="for All Devices"
        details="Ensure seamless user experience across all platforms with responsive design, intuitive navigation, and accessibility for all users."
        icon={devices}
        alignLeft={true} // Right aligned by default
      />

      {/* ServiceCard for Performance - Conversions */}
      <ServiceCard
        subtitle="Performance"
        title1="Higher"
        title2="Conversion Rates"
        details="Faster load times, optimized calls to action, and continuous performance tracking to boost user engagement and business success."
        icon={barchart}
        alignLeft={true}
      />
    </div>
  );
}
