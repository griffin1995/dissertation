import "../styles/Projects.scss"; // Assuming you store the styles separately

export function Projects() {
  return (
    <div className="projects-page">
      {/* Load external fonts and icons */}
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:900"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
        crossOrigin="anonymous"
      />

      <div className="container">
        <div className="card">
          <h2>North</h2>
          <i className="fas fa-arrow-right"></i>
          <p>Elliott Parsons</p>
          <div
            className="pic"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1525543907410-b2562b6796d6?ixlib=rb-0.3.5&s=9ff8e5e718a6a40cbd0e1471235912f4&auto=format&fit=crop&w=3452&q=80")',
            }}
          ></div>
          <ul>
            {[...Array(22)].map((_, i) => (
              <li key={i}></li>
            ))}
          </ul>
          <div className="social">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-github"></i>
          </div>
          <button></button>
        </div>
        <p>. </p><br></br>
        <p>. </p><br></br>
        <p>. </p><br></br>
        <p>. </p><br></br>
        <p>. </p><br></br>
        <div className="card card2">
          <h2>Vauxhall</h2>
          <i className="fas fa-arrow-right"></i>
          <p>Jack Griffin</p>
          <div
            className="pic"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1528785198459-ec50485704c7?ixlib=rb-0.3.5&s=3a2fc3039516555bbb2e9cd2967bd321&auto=format&fit=crop&w=1537&q=80")',
            }}
          ></div>
          <ul>
            {[...Array(22)].map((_, i) => (
              <li key={i}></li>
            ))}
          </ul>
          <div className="social">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-github"></i>
          </div>
          <button></button>
        </div>
      </div>

      <a
        href="https://dribbble.com/YancyMin"
        className="dr-url"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
    </div>
  );
}
