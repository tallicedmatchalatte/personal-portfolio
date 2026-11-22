import { useState } from 'react'
import { skillCategories } from '../../data/skills'
import RevealOnScroll from '../common/RevealOnScroll/RevealOnScroll'
import { FiPause, FiPlay } from 'react-icons/fi'
import './Skills.css'

function SkillIcon({ skill, selected, isDuplicate, onSelect }) {
  return (
    <button
      type="button"
      className={`skill-icon ${selected ? 'skill-icon--selected' : ''}`}
      onClick={() => onSelect(skill)}
      aria-label={`Select ${skill.name} skill`}
      aria-pressed={selected}
      tabIndex={isDuplicate ? -1 : 0}
    >
      <span className="skill-icon__wrap">
        {skill.icon ? (
          <img src={skill.icon} alt="" className="skill-icon__img" loading="lazy" />
        ) : (
          <span className="skill-icon__initial">{skill.name.charAt(0)}</span>
        )}
      </span>
      <span className="skill-icon__name">{skill.name}</span>
    </button>
  )
}

function Skills() {
  const skills = skillCategories.flatMap((category) =>
    category.skills.map((skill) => ({ ...skill, category: category.title })),
  )
  const scrollDuration = Math.max(26, skills.length * 3.2)
  const [isPlaying, setIsPlaying] = useState(true)
  const [selectedSkill, setSelectedSkill] = useState(null)

  const handleSkillSelect = (skill) => {
    setSelectedSkill(skill)
    setIsPlaying(false)
  }

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <RevealOnScroll>
          <h2 className="skills__heading">
            Tools & <span className="highlight">Technologies</span>
          </h2>
          <p className="skills__subheading">What I use to design and build</p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="skills__panel">
            <div className="skills__panel-header">
              <span><b>01</b> / DESIGN + FRONTEND TOOLKIT</span>
              <button
                type="button"
                className="skills__play-toggle"
                onClick={() => setIsPlaying((playing) => !playing)}
                aria-label={isPlaying ? 'Pause skills carousel' : 'Play skills carousel'}
              >
                {isPlaying ? <FiPause aria-hidden="true" /> : <FiPlay aria-hidden="true" />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>
            </div>
            <div className="skills__carousel" role="region" aria-label="Design and frontend skills">
              <div
                className="skills__track"
                style={{
                  '--skills-duration': `${scrollDuration}s`,
                  animationPlayState: isPlaying ? 'running' : 'paused',
                }}
              >
                {[0, 1].map((copy) => (
                  <div className="skills__items" key={copy} aria-hidden={copy === 1}>
                    {skills.map((skill) => (
                      <SkillIcon
                        key={skill.name}
                        skill={skill}
                        selected={selectedSkill?.name === skill.name}
                        isDuplicate={copy === 1}
                        onSelect={handleSkillSelect}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="skills__panel-footer" aria-live="polite">
              <span>{selectedSkill ? `SELECTED / ${selectedSkill.name}` : 'SELECT A SKILL TO EXPLORE'}</span>
              <span>{selectedSkill ? selectedSkill.category : `${skills.length} SKILLS / ONE CONTINUOUS TRACK`}</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default Skills
