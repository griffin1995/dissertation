import PropTypes from "prop-types";

// ServiceCard component that accepts props for dynamic content
// Props: subtitle, title1, title2, details, icon, alignLeft
// Renders a clickable card with a dynamic icon, titles, subtitle, and description
const ServiceCard = ({
  subtitle,
  title1,
  title2,
  details,
  icon,
  alignLeft,
}) => {
  return (
    <a href="#" className="canvas">
      {/* Border with gradient effect around the card */}
      <div className="canvas_border">
        <svg>
          <defs>
            {/* Linear gradient used for the border of the card */}
            <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "rgb(253,137,68)", stopOpacity: 1 }}
              ></stop>
              <stop
                offset="100%"
                style={{ stopColor: "rgb(153,75,23)", stopOpacity: 1 }}
              ></stop>
            </linearGradient>
          </defs>
          {/* Rectangle that outlines the border with the gradient */}
          <rect
            id="rect-grad"
            className="rect-gradient"
            fill="none"
            stroke="url(#grad-orange)"
            strokeLinecap="square"
            strokeWidth="4"
            strokeMiterlimit="30"
            width="100%"
            height="100%"
          ></rect>
        </svg>
      </div>

      {/* Wrapper for the icon displayed on the card */}
      <div className="canvas_img-wrapper">
        {/* Icon for the service card, passed in dynamically as a prop */}
        <img
          className="canvas_img"
          src={icon}
          alt={`${title1} ${title2} Icon`}
        />
      </div>

      {/* Text content section for the service card */}
      {/* Conditionally apply canvas_copy--left class based on alignLeft prop */}
      <div className={`canvas_copy ${alignLeft ? "canvas_copy--left" : ""}`}>
        {/* Subtitle displayed above the titles, passed in as a prop */}
        <span className="canvas_copy_subtitle">{subtitle}</span>

        {/* Two dynamic title lines passed as props */}
        <strong className="canvas_copy_title">{title1}</strong>
        <strong className="canvas_copy_title">{title2}</strong>

        {/* Details/description text passed in as a prop */}
        <span className="canvas_copy_details">{details}</span>
      </div>
    </a>
  );
};

// Define prop types for the ServiceCard component
ServiceCard.propTypes = {
  subtitle: PropTypes.string.isRequired, // Subtitle must be a string and is required
  title1: PropTypes.string.isRequired, // Title1 must be a string and is required
  title2: PropTypes.string.isRequired, // Title2 must be a string and is required
  details: PropTypes.string.isRequired, // Details must be a string and is required
  icon: PropTypes.string.isRequired, // Icon must be a string (URL) and is required
  alignLeft: PropTypes.bool, // alignLeft is a boolean to control text alignment, optional
};

// Default prop values for optional props
ServiceCard.defaultProps = {
  alignLeft: false, // Default alignment is not left
};

export default ServiceCard;
