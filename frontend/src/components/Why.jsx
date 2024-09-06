import self from "../assets/home/office_meeting.jpg";
import "../styles/Why.scss";
export function Why() {
  return (
    <div className="why-container">
      <div className="writing">
        <h2>Why Choose Us?</h2>
        <p>
          Discover how our expertise and commitment can help you achieve your goals. Watch this brief video to see why we're the perfect partner for your success.
        </p>
      </div>
      <div className="photo">
        <img src={self} alt="Jack Griffin"></img>
      </div>
    </div>
  );
}
