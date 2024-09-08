import React from "react";
import "../styles/Projects.scss"; // Ensure the correct path to styles
import { ProjectCard } from "../components/ProjectCard"; // Adjust path if needed

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
        {/* Using ProjectCard component with props */}
        <ProjectCard
          title="North"
          name="Elliott Parsons"
          imageUrl="https://images.unsplash.com/photo-1525543907410-b2562b6796d6?ixlib=rb-0.3.5&s=9ff8e5e718a6a40cbd0e1471235912f4&auto=format&fit=crop&w=3452&q=80"
          socials={["facebook-f", "twitter", "instagram", "github"]}
        />

        <ProjectCard
          title="Vauxhall"
          name="Jack Griffin"
          imageUrl="https://images.unsplash.com/photo-1528785198459-ec50485704c7?ixlib=rb-0.3.5&s=3a2fc3039516555bbb2e9cd2967bd321&auto=format&fit=crop&w=1537&q=80"
          socials={["facebook-f", "twitter", "instagram", "github"]}
        />
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
