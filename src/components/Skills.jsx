import { skills } from '../data'

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skill-groups">
          {skills.map((group) => (
            <div key={group.group} className="skill-group">
              <h3 className="skill-group-name">{group.group}</h3>
              <div className="skill-list">
                {group.items.map((item) => (
                  <span key={item} className="skill">{item}</span>
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