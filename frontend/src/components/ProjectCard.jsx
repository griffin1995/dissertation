
export function ProjectCard({ title, name, imageUrl, socials }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <i className="fas fa-arrow-right"></i>
      <p>{name}</p>
      <div
        className="pic"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <ul>
        {[...Array(22)].map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>
      <div className="social">
        {socials.map((social, index) => (
          <i key={index} className={`fab fa-${social}`}></i>
        ))}
      </div>
      <button></button>
    </div>
  );
}
