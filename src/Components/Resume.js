import React from 'react';

const Resume = (props) => {
  let skillmessage = props.data.skillmessage;

  let education = props.data.education.map(education => {
    return <div key={education.school}><h3>{education.school}</h3>
      <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
      <p>{education.description}</p></div>
  })

  let work = props.data.work.map(work => {
    return <div key={work.company}><h3>{work.company}</h3>
      <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
      <p>
        {work.description} <br />
        {work.techStack ? <em className="techStack">Tech stack: {work.techStack}</em> : ''}
      </p>
    </div>
  })

  let publications = props.data.publications.map(publication => {
    return <div key={publication.company}>
      <h3>{publication.company}</h3>
      <p className="info">{publication.title}<span>&bull;</span> <em className="date">{publication.years}</em></p>
      <p>{publication.description}, <a href={publication.link}>{publication.doi}.</a></p>
    </div>
  })

  let social = props.data.social.map(social => {
    return <div key={social.company}><h3>{social.company}</h3>
      <p className="info">{social.title}<span>&bull;</span> <em className="date">{social.years}</em></p>
      <p>{social.description}</p>
    </div>
  })

  let skills = props.data.skills.map(skill => {
    let className = 'bar-expand ' + skill.name.toLowerCase();
    return <li key={skill.name}><span style={{ width: skill.level }} className={className}></span><em>{skill.name}</em></li>
  })

  return (
    <section id="resume">

      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {education}
            </div>
          </div>
        </div>
      </div>

      <div className="row work">

        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>

        <div className="nine columns main-col">
          {work}
        </div>
      </div>

      <div className="row work">

        <div className="three columns header-col">
          <h1><span>Publications</span></h1>
        </div>

        <div className="nine columns main-col">
          {publications}
        </div>
      </div>

      <div className="row work">

        <div className="three columns header-col">
          <h1><span>Other Experience</span></h1>
        </div>

        <div className="nine columns main-col">
          {social}
        </div>
      </div>

      <div className="row skill">

        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>

        <div className="nine columns main-col">

          <p>{skillmessage}
          </p>

          <div className="bars">
            <ul className="skills">
              {skills}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
