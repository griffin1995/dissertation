// Import the required styles for the Services component
import "../styles/ServicesPage.scss";

// Import service icons for use in the detailed sections
import credibility from "../assets/services/credibility.svg";
import devices from "../assets/services/devices.svg";
import barchart from "../assets/services/barchart.svg";

// The Services component renders the content for the Services page
export function Services() {
  return (
    <div className="services-page">
      {/* Main heading for the Services page */}
      <h1>Our Services</h1>

      {/* Introductory paragraph providing information about the services */}
      <p>
        Welcome to our services page. We pride ourselves in offering top-notch
        solutions that enhance your online presence and drive measurable
        results. Explore our range of services below to learn more about how we
        can help your business grow.
      </p>

      {/* Detailed section for Credibility service */}
      <section className="service-section">
        <div className="service-content">
          <div className="service-text">
            <h2>Credibility: Modern Website Design</h2>
            <p>
              Your website is often the first impression potential clients have
              of your business. We design modern, visually striking websites
              that not only look good but also build trust. Our sites are
              secure, mobile-friendly, and aligned with the latest web trends,
              ensuring your brand stays ahead of the curve.
            </p>
            <ul>
              <li>Custom, responsive designs</li>
              <li>SSL security integration</li>
              <li>SEO-optimised structures</li>
              <li>Fast load times for an improved user experience</li>
            </ul>
          </div>
          <div className="service-image">
            <img src={credibility} alt="Modern Website Design" />
          </div>
        </div>
      </section>

      {/* Detailed section for Usability service */}
      <section className="service-section">
        <div className="service-content">
          <div className="service-text">
            <h2>Usability: Optimised for All Devices</h2>
            <p>
              In today’s world, your website must be optimised for every type of
              device, from desktops to mobile phones. We ensure that every user
              enjoys a seamless experience with easy navigation, regardless of
              the platform they use. Our designs focus on both responsiveness
              and accessibility to cater to all users, including those with
              disabilities.
            </p>
            <ul>
              <li>Responsive design for all screen sizes</li>
              <li>Mobile-first development approach</li>
              <li>ADA-compliant accessibility features</li>
              <li>Optimised for fast performance on mobile devices</li>
            </ul>
          </div>
          <div className="service-image">
            <img src={devices} alt="Optimised for All Devices" />
          </div>
        </div>
      </section>

      {/* Detailed section for Performance service */}
      <section className="service-section">
        <div className="service-content">
          <div className="service-text">
            <h2>Performance: Higher Conversion Rates</h2>
            <p>
              We design with performance in mind to ensure your website not only
              loads fast but also converts visitors into customers. With
              optimised calls to action, clear messaging, and data-driven design
              choices, we help you achieve higher engagement and better results.
            </p>
            <ul>
              <li>Faster load times for improved user retention</li>
              <li>Optimised calls to action for higher engagement</li>
              <li>Performance tracking and analytics integration</li>
              <li>
                Continuous updates and testing to ensure long-term success
              </li>
            </ul>
          </div>
          <div className="service-image">
            <img src={barchart} alt="Higher Conversion Rates" />
          </div>
        </div>
      </section>
    </div>
  );
}
