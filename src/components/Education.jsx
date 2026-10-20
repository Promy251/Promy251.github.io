import { education } from '../data'

function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="edu-list">
          {education.map((item) => (
            <div key={item.degree} className="edu-card">
              <div className="edu-icon">{item.icon}</div>
              <div>
                <h3 className="edu-degree">{item.degree}</h3>
                <p className="edu-school">{item.school}</p>
                <p className="edu-details">
                  {item.year} · {item.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education