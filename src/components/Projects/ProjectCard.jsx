import { FiArrowUpRight } from 'react-icons/fi'
import './Projects.css'

const statusClassMap = {
  'Completed': 'status-badge--completed',
  'In Progress': 'status-badge--progress',
  'Coming Soon': 'status-badge--soon',
}

function ProjectCard({ project }) {
  const link = project.liveUrl || project.githubUrl

  const cardContent = (
    <>
      <div className="project-card__image-wrap">
        <span className={`status-badge ${statusClassMap[project.status]}`}>{project.status}</span>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">
          {project.title}
          {link && <FiArrowUpRight className="project-card__link-icon" />}
        </h3>
        <p className="project-card__description">{project.description}</p>

        <div className="project-card__tech">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-card__tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </>
  )

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card glass-card">
      {cardContent}
    </a>
  ) : (
    <div className="project-card glass-card">{cardContent}</div>
  )
}

export default ProjectCard