import self from "../assets/415193362_3268705463425463_8068988606069687783_n.jpg";
import "../styles/HeroSection.scss";

function HeroSection() {
  return (
    <div className="herosection-container">
      <div className="writing">
        <h2>Bring Your Vision to Life</h2>
        <p>
          I'm Jack Griffin, specializing in UI/UX design and digital services, tailored specifically for UK businesses. With a commitment to delivering top-notch solutions, I’m here to help you build an outstanding platform that meets your goals.
        </p>
      </div>
      <div className="photo">
        <img src={self} alt="Jack Griffin"></img>
      </div>
    </div>
  );
}

export default HeroSection;
