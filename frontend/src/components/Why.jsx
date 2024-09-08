// Import the image asset used in the component
import self from "../assets/home/office_meeting.jpg";

// Import the associated SCSS styling for this component
import "../styles/Why.scss";

// Function component 'Why' renders a section explaining why to choose the company
export function Why() {
  return (
    <div className="why-container">
      {/* Container for the text content */}
      <div className="writing">
        <h2>Why Choose Us?</h2>
        <p>
          Discover how our expertise and commitment can help you achieve your
          goals. Watch this brief video to see why we&apos;re the perfect
          partner for your success.
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
