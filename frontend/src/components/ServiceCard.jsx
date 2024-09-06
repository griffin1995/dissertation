// ServiceCard component that accepts props for dynamic content
const ServiceCard = ({ subtitle, title1, title2, details, icon }) => {
  return (
    <a href="#" className="canvas">
      <div className="canvas_border">
        <svg>
          <defs>
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
      <div className="canvas_img-wrapper">
        {/* Icon for the service card */}
        <img
          className="canvas_img"
          src={icon}
          alt={`${title1} ${title2} Icon`}
        />
      </div>
      <div className="canvas_copy">
        {/* Dynamic content based on props */}
        <span className="canvas_copy_subtitle">{subtitle}</span>
        <strong className="canvas_copy_title">{title1}</strong>
        <strong className="canvas_copy_title">{title2}</strong>
        <span className="canvas_copy_details">{details}</span>
      </div>
    </a>
  );
};

export default ServiceCard;
