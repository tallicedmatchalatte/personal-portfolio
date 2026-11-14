import { skillCategories } from '../../data/skills'
import RevealOnScroll from '../common/RevealOnScroll/RevealOnScroll'
import './Skills.css'

function SkillIcon({ name, icon }) {
  return (
    <div className="skill-icon">
      <div className="skill-icon__wrap">
        {icon ? (
          <img src={icon} alt={name} className="skill-icon__img" loading="lazy" />
        ) : (
          <span className="skill-icon__initial">{name.charAt(0)}</span>
        )}
      </div>
      <span className="skill-icon__name">{name}</span>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <RevealOnScroll>
          <span className="section-label">// skills</span>
          <h2 className="skills__heading">
            Tools & <span className="highlight">Technologies</span>
          </h2>
          <p className="skills__subheading">What I use to design and build</p>
        </RevealOnScroll>

        <div className="skills__grid">
          {skillCategories.map((category, ci) => (
            <RevealOnScroll key={category.id} delay={`${ci * 0.08}s`}>
              <div className="skills__category">
                <p className="skills__category-title">{category.title}</p>
                <div className="skills__icon-row">
                  {category.skills.map((skill) => (
                    <SkillIcon key={skill.name} name={skill.name} icon={skill.icon} />
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
