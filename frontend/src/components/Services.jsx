import "../styles/Services.scss";
import writing from "../assets/services/writing.svg";
import seo from "../assets/services/seo.svg";
import conversion from "../assets/services/conversion.svg";
import mobile from "../assets/services/mobile.svg";
import hammer from "../assets/services/hammer.svg";

export function Services() {
  return (
    <div className="services-container">
      <h2 className="services-title">The Services We Provide For You</h2>
      <div className="services-grid">
        <div className="service-card glass-effect">
          <img src={writing} alt="Redesign Icon" className="service-icon" />
          <h3>Website Redesign</h3>
          <p>Complete overhaul of outdated websites for a modern, trustworthy feel.</p>
        </div>
        <div className="service-card glass-effect">
          <img src={seo} alt="SEO Icon" className="service-icon" />
          <h3>SEO & Visibility</h3>
          <p>Focus on improving search engine rankings and online visibility.</p>
        </div>
        <div className="service-card glass-effect">
          <img src={conversion} alt="Website Conversion Icon" className="service-icon" />
          <h3>Website Conversion</h3>
          <p>Transform slow, outdated sites into high-performing ones.</p>
        </div>
        <div className="service-card glass-effect">
          <img src={mobile} alt="Mobile Optimization Icon" className="service-icon" />
          <h3>Mobile Optimization</h3>
          <p>Ensure full functionality and a great user experience on mobile devices.</p>
        </div>
        <div className="service-card glass-effect">
          <img src={hammer} alt="Custom React Development Icon" className="service-icon" />
          <h3>Custom React Development</h3>
          <p>Building dynamic, scalable web solutions using React.</p>
        </div>
        <div className="service-card glass-effect">
          <img src={hammer} alt="Maintenance Icon" className="service-icon" />
          <h3>Ongoing Support & Maintenance</h3>
          <p>Continuous updates and maintenance to keep the website running optimally.</p>
        </div>
      </div>
    </div>
  );
}
