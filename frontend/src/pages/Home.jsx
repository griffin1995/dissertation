// Import necessary components to be used in the Home page
import { HeroSection, Why, Services } from "../components";

// The Home component renders the main landing page, displaying the hero section, reasons to choose the service, and services offered
export function Home() {
  return (
    <div>
      {/* Render the HeroSection component, typically a main banner or introductory section */}
      <HeroSection />

      {/* Render the Why component, explaining why to choose the service */}
      <Why />
      <br />
      <br />
      <br />
      <br />
      {/* Render the Services component, listing the services offered by the company */}
      <Services />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
