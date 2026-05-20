import "../Styles/Projects.css";

const projects = [
  {
    title: "Admin Dashboard UI",
    desc: "A responsive admin dashboard with dynamic data tables, charts, and filter controls. Consumed REST APIs via Axios and managed state with Redux Toolkit.",
    tags: ["React", "TypeScript", "Redux", "Axios", "REST API"],
    color: "primary",
    icon: "🗂️",
    highlights: [
      "Built reusable table, filter, and pagination components",
      "Integrated REST APIs with Redux-Thunk for async data fetching",
      "Fully responsive layout across desktop, tablet, and mobile",
    ],
    status: "Work Project",
  },
  {
    title: "React Component Library",
    desc: "A shared internal component library of 20+ reusable UI components with consistent design tokens, dark mode support, and TypeScript typings.",
    tags: ["React", "TypeScript", "CSS Modules", "Storybook", "Jest"],
    color: "blue",
    icon: "🎨",
    highlights: [
      "20+ components: buttons, modals, dropdowns, form fields",
      "Dark mode support via CSS custom properties",
      "Unit tested with Jest and React Testing Library",
    ],
    status: "Work Project",
  },
  {
    title: "Multi-Step Form with Validation",
    desc: "A complex multi-step form wizard with field-level validation, conditional logic, and progress tracking — consuming a REST API on submit.",
    tags: ["React", "JavaScript ES6+", "Redux", "REST API", "CSS3"],
    color: "green",
    icon: "📋",
    highlights: [
      "Step-by-step wizard with back/forward navigation",
      "Real-time field validation and error handling",
      "Form state persisted across steps using Redux",
    ],
    status: "Work Project",
  },
  {
    title: "Data Visualization Dashboard",
    desc: "An analytics dashboard displaying KPIs, trend charts, and filterable reports. REST API data is normalized and managed via Redux-Saga middleware.",
    tags: ["React", "TypeScript", "Redux-Saga", "REST API", "Recharts"],
    color: "yellow",
    icon: "📊",
    highlights: [
      "Line, bar, and pie charts with interactive tooltips",
      "Date-range filtering with debounced API calls",
      "Redux-Saga for complex async data orchestration",
    ],
    status: "Work Project",
  },
  {
    title: "GraphQL-Powered Product Listing",
    desc: "A product browsing UI that queries a GraphQL API using Apollo Client, with pagination, search, and dynamic filtering on the frontend.",
    tags: ["React", "GraphQL", "Apollo Client", "TypeScript", "CSS Modules"],
    color: "orange",
    icon: "🛍️",
    highlights: [
      "Apollo Client for GraphQL queries and caching",
      "Search, sort, and filter entirely on the frontend",
      "Skeleton loaders and error boundary handling",
    ],
    status: "Work Project",
  },
  {
    title: "Portfolio Website",
    desc: "This portfolio — a multi-page SPA built from scratch with React and React Router DOM. No UI libraries, pure custom CSS animations.",
    tags: ["React", "React Router DOM", "TypeScript", "CSS Animations"],
    color: "primary",
    icon: "🚀",
    highlights: [
      "Multi-page SPA with React Router v6",
      "Typewriter effect, scroll animations, animated skill bars",
      "Mobile-first fully responsive design",
    ],
    status: "Live",
  },
];

const statusColors = {
  "Work Project": "green",
  Live: "primary",
};

export default function Projects() {
  return (
    <div className="page">
      <div className="container">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        <div className="section-divider" />

        <p className="text-muted" style={{ marginBottom: "2.5rem", maxWidth: "600px" }}>
          A selection of frontend-focused work from my professional experience — all UI-driven, API-integrated, and built with React.
        </p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className={`card project-card project-card-${p.color}`} key={i}>
              <div className="project-header">
                <div className={`project-icon project-icon-${p.color}`}>{p.icon}</div>
                <span className={`tag ${statusColors[p.status] === "primary" ? "" : statusColors[p.status] || "blue"}`}>
                  {p.status}
                </span>
              </div>
              <h3 className={`project-title title-${p.color}`}>{p.title}</h3>
              <p className="project-desc text-muted">{p.desc}</p>

              <ul className="project-highlights">
                {p.highlights.map((h, j) => (
                  <li key={j}>
                    <span className={`bullet bullet-${p.color}`}>▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="project-tags">
                {p.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}