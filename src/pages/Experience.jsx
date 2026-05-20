import "../Styles/Experience.css";

const experiences = [
  {
    role: "Software Engineer",
    company: "Kyyba India Pvt Ltd",
    location: "Chennai, Tamil Nadu",
    period: "May 2025 – Present",
    type: "Full-time",
    domain: "Sustainability Domain",
    project: "Sustain+",
    color: "primary",
    highlights: [
      "Resolved 50+ JIRA tickets/quarter, reducing bug backlog by 30% and improving release timelines",
      "Designed and implemented 5+ new modules, boosting platform functionality and helping organizations cut resource usage costs by 15%",
      "Engineered 20+ reusable UI components with React.js & Material UI, reducing feature delivery time by 25%",
      "Integrated 15+ REST & GraphQL APIs for real-time, reliable data exchange",
      "Refactored legacy code, improving load times and enhancing responsiveness across all devices",
      "Partnered with backend & QA teams to streamline workflows, cutting integration issues by 20%",
      "Achieved 90%+ unit test coverage, ensuring stability and minimizing post-release defects",
      "Participated in code reviews and technical discussions, contributing to a 15% reduction in recurring issues",
    ],
    tags: ["React.js", "Material UI", "GraphQL", "REST APIs", "Redux", "TypeScript"],
  },
  {
    role: "Software Engineer",
    company: "Azentio Software",
    location: "Chennai, India",
    period: "May 2022 – October 2024",
    type: "Full-time",
    domain: "Insurance Domain",
    color: "blue",
    highlights: [
      "Developed and upgraded insurance-based web applications in React.js, improving page load times by 20%",
      "Connected 10+ REST APIs to enable automated workflows and real-time system updates",
      "Completed 100+ JIRA tickets with 95% on-time delivery while maintaining high quality",
      "Collaborated with cross-functional teams to deploy features with zero critical post-release defects",
    ],
    tags: ["React.js", "JavaScript ES6+", "REST APIs", "Tailwind CSS", "HTML5", "CSS3", "Git"],
    projects: [
      {
        name: "CQM – Customer Management Support",
        period: "Jun 2024 – Oct 2024",
        points: [
          "Supported Standard Bank (South Africa) by managing daily operations across applications",
          "Closed 95% of support tickets within SLA timelines by optimizing database configurations",
          "Maintained 99% uptime for production systems",
        ],
      },
      {
        name: "MSIG – Insurance Application UI Development",
        period: "Dec 2023 – May 2024",
        points: [
          "Built UI for a new insurance module using React.js, improving performance via streamlined components",
          "Configured 10+ REST APIs and ensured 100% responsiveness & cross-browser compatibility",
        ],
      },
      {
        name: "BT-7.9 – Insurance Application Enhancement",
        period: "Jan 2023 – Nov 2023",
        points: [
          "Led a 4-member team to revamp outdated UI using React.js, JavaScript, HTML & Tailwind CSS",
          "Delivered 30+ reusable components, accelerating development by 25%",
        ],
      },
      {
        name: "AZ-13 – Insurance Claims Application",
        period: "May 2022 – Dec 2022",
        points: [
          "Created UI components in React.js & CSS, increasing engagement by 15%",
          "Achieved 100% responsiveness and improved accessibility standards",
        ],
      },
    ],
  },
];

function ProjectAccordion({ projects }) {
  return (
    <div className="projects-accordion">
      <p className="projects-accordion-label">Key Projects</p>
      {projects.map((proj, i) => (
        <div className="proj-block" key={i}>
          <div className="proj-header">
            <span className="proj-name">{proj.name}</span>
            <span className="proj-period">{proj.period}</span>
          </div>
          <ul className="proj-points">
            {proj.points.map((pt, j) => (
              <li key={j}>
                <span className="bullet bullet-blue">▸</span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <div className="page">
      <div className="container">
        <p className="section-label">Career Journey</p>
        <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
        <div className="section-divider" />

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className={`timeline-dot dot-${exp.color}`}>
                <div className="dot-inner" />
              </div>
              <div className={`card timeline-card timeline-card-${exp.color}`}>
                <div className="exp-header">
                  <div>
                    <h3 className={`exp-role role-${exp.color}`}>{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                    <p className="exp-location text-muted">{exp.location}</p>
                  </div>
                  <div className="exp-meta">
                    <span className={`tag ${exp.color === 'blue' ? 'blue' : ''} exp-period`}>{exp.period}</span>
                    <span className="exp-type">{exp.type}</span>
                    {exp.domain && <span className="exp-domain">{exp.domain}</span>}
                  </div>
                </div>

                {exp.project && (
                  <p className="exp-project-label">
                    <span className="project-badge">Project</span> {exp.project}
                  </p>
                )}

                <ul className="exp-highlights">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>
                      <span className={`bullet bullet-${exp.color}`}>▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {exp.projects && <ProjectAccordion projects={exp.projects} />}

                <div className="exp-tags">
                  {exp.tags.map(t => (
                    <span key={t} className={`tag ${exp.color === 'blue' ? 'blue' : ''}`}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="timeline-end">
            <div className="timeline-end-dot">🎓</div>
            <span className="text-muted" style={{ fontSize: "0.9rem" }}>
              BCA – Bachelor of Computer Application · SIVET College, Madras University · 2021
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}