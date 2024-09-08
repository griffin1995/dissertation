// Import the image asset used in the HeroSection component
import self from "../assets/home/undraw_cloud_hosting_7xb1.svg";

// Import the associated SCSS styling for this component
import "../styles/HeroSection.scss";

// HeroSection component displays a banner section with a brief introduction
export function HeroSection() {
  return (
    <div className="herosection-container">
      {/* Container for the text content */}
      <div className="writing">
        <h2>Bring Your Vision to Life</h2>
        <p>
          I&apos;m Jack Griffin, specializing in UI/UX design and digital
          services, tailored specifically for UK businesses. With a commitment
          to delivering top-notch solutions, I&apos;m here to help you build an
          outstanding platform that meets your goals.
        </p>
      </div>

      {/* Container for the image */}
      <div className="photo">
        {/* Display the imported image with alt text for accessibility */}
        <img src={self} alt="Jack Griffin"></img>
      </div>
    </div>
  );
}
