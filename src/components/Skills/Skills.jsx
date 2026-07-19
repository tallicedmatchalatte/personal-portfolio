import { skillCategories } from '../../data/skills'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import './Skills.css'

function SkillBar({ name, level, isVisible }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div className="skill-bar__fill" style={{ width: isVisible ? `${level}%` : '0%' }}></div>
      </div>
    </div>
  )
}

function Skills() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15 })

  return (
    <section id="skills" className="skills">
      <div className="skills__container" ref={ref}>
        <h2 className="skills__heading">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="skills__subheading">
          Technologies and tools I use to build and analyze
        </p>

        <div className="skills__grid">
          {skillCategories.map((category) => (
            <div key={category.id} className="skills__category glass-card">
              <h3 className="skills__category-title">{category.title}</h3>
              <div className="skills__list">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} isVisible={isVisible} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills