import { upcomingProjects } from '../../data/upcomingProjects'
import './Projects.css'

function UpcomingProjects() {
  return (
    <section id="upcoming-projects" className="upcoming">
      <div className="upcoming__container">
        <h2 className="upcoming__heading">
          Upcoming <span className="gradient-text">Projects</span>
        </h2>
        <p className="upcoming__subheading">What I'm planning to build next</p>

        {upcomingProjects.length > 0 ? (
          <div className="upcoming__grid">
            {upcomingProjects.map((project) => (
              <div key={project.id} className="upcoming-card glass-card">
                <span className="status-badge status-badge--soon">Coming Soon</span>
                <h3 className="upcoming-card__title">{project.title}</h3>
                <p className="upcoming-card__description">{project.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="projects__empty-state">
            <p className="projects__empty-title">Planning my next builds 🧠</p>
            <p className="projects__empty-text">
              New project ideas will show up here soon.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default UpcomingProjects