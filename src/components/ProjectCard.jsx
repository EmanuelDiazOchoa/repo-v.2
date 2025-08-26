import React from "react";

export default function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  projectUrl,
  
}) {
  return (
    <div className="project-card">
      <img
        src={imageUrl}
        alt={title}
        className="card-image"
        width="320"
        height="216"
      />

      <div className="card-content">
        <h2 className="project-title">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>

        
        {description && <p className="project-description">{description}</p>}

        <p className="tech-label">Tecnologías utilizadas:</p>

        <div className="tech-images">
          {technologies.map((tech, i) => (
            <img
              key={i}
              src={tech.src}
              alt={tech.alt}
              className="tech-icon"
              width="40"
              height="40"
              title={tech.alt}
            />
          ))}
        </div>

        <a
          href={projectUrl}
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Proyecto
          <svg className="external-icon" viewBox="0 0 24 24">
            <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
          </svg>
        </a>

        <div className="card-footer">
          <span className="date">
            <svg className="calendar-icon" viewBox="0 0 24 24">
              <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
            </svg>
            
          </span>
        </div>
      </div>
    </div>
  );
}
