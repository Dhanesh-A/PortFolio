import { useEffect, useRef, useState } from "react";
import "../Styles/Skills.css";

// const skillGroups = [
//   {
//     title: "Core",
//     color: "primary",
//     skills: [
//       { name: "React.js", level: 95 },
//       { name: "JavaScript (ES6+)", level: 93 },
//       { name: "TypeScript", level: 88 },
//       { name: "HTML5 & CSS3", level: 96 },
//     ],
//   },
//   {
//     title: "State & Data",
//     color: "blue",
//     skills: [
//       { name: "Redux", level: 90 },
//       { name: "Redux-Saga", level: 85 },
//       { name: "Redux-Thunk", level: 87 },
//       { name: "Context API", level: 92 },
//     ],
//   },
//   {
//     title: "APIs & Tooling",
//     color: "green",
//     skills: [
//       { name: "GraphQL / Apollo", level: 82 },
//       { name: "REST APIs", level: 93 },
//       { name: "React Router DOM", level: 94 },
//       { name: "Axios / Fetch", level: 92 },
//     ],
//   },
//   {
//     title: "Dev Tools",
//     color: "yellow",
//     skills: [
//       { name: "Git & GitHub", level: 90 },
//       { name: "Webpack / Vite", level: 80 },
//       { name: "Jest / RTL", level: 78 },
//       { name: "Figma Handoff", level: 85 },
//     ],
//   },
// ];


const skillGroups = [
  {
    title: "Core",
    color: "primary",
    skills: [
      { name: "React.js", level: 95 },
      { name: "JavaScript (ES6+)", level: 93 },
      { name: "TypeScript", level: 88 },
      { name: "HTML5 & CSS3", level: 96 },
    ],
  },
  {
    title: "State Management",
    color: "blue",
    skills: [
      { name: "Redux", level: 90 },
      { name: "Redux-Saga", level: 85 },
      { name: "Redux-Thunk", level: 87 },
      { name: "Context API", level: 92 },
    ],
  },
  {
    title: "APIs & Testing",
    color: "green",
    skills: [
      { name: "REST APIs", level: 93 },
      { name: "GraphQL", level: 82 },
      { name: "Jest", level: 78 },
      { name: "Responsive Design", level: 95 },
    ],
  },
  {
    title: "UI & Tools",
    color: "yellow",
    skills: [
      { name: "Material UI", level: 88 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Git & GitHub", level: 90 },
      { name: "Jira", level: 82 },
    ],
  },
];

const techIcons = [
  { label: "React", emoji: "⚛️", color: "#61DAFB" },
  { label: "TypeScript", emoji: "🟦", color: "#3178C6" },
  { label: "JavaScript", emoji: "🟨", color: "#F7DF1E" },
  { label: "GraphQL", emoji: "◉", color: "#E10098" },
  { label: "Redux", emoji: "🔮", color: "#764ABC" },
  { label: "REST", emoji: "🔗", color: "#00C896" },
  { label: "Git", emoji: "🌿", color: "#F05032" },
  { label: "Sass", emoji: "💎", color: "#CC6699" },
  { label: "Material UI", emoji: "🎨", color: "#007FFF" },
{ label: "Tailwind", emoji: "🌊", color: "#38BDF8" },
{ label: "Jest", emoji: "🧪", color: "#C21325" },
{ label: "Jira", emoji: "📋", color: "#0052CC" },
];

function SkillBar({ name, level, color, animate }) {
  return (
    <div className="skill-bar-wrap">
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
        <span className={`skill-pct skill-pct-${color}`}>{level}%</span>
      </div>
      <div className="skill-bar-bg">
        <div
          className={`skill-bar-fill skill-fill-${color}`}
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <div className="container">
        <p className="section-label">What I Know</p>
        <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
        <div className="section-divider" />

        <div className="tech-icons-row">
          {techIcons.map(t => (
            <div className="tech-icon-chip" key={t.label} style={{ "--chip-color": t.color }}>
              <span className="tech-emoji">{t.emoji}</span>
              <span className="tech-chip-label">{t.label}</span>
            </div>
          ))}
        </div>

        <div className="skills-grid" ref={ref}>
          {skillGroups.map(group => (
            <div className="card skill-card" key={group.title}>
              <div className={`skill-group-label skill-label-${group.color}`}>{group.title}</div>
              <div className="skill-bars">
                {group.skills.map(s => (
                  <SkillBar key={s.name} {...s} color={group.color} animate={visible} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}