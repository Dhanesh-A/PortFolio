import { Link } from "react-router-dom"; // used for Skills link below
import "../Styles/About.css";

export default function About() {
  return (
    <div className="page">
      <div className="container">
        <p className="section-label">Who I Am</p>
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        <div className="section-divider" />

        <div className="about-grid">
          <div className="about-visual">
            <div className="avatar-ring">
              <div className="avatar-inner">
                <span className="avatar-initials">DA</span>
              </div>
              <div className="ring ring-1" />
              <div className="ring ring-2" />
            </div>
            <div className="about-contact-card card">
              <div className="contact-row">
                <span className="contact-icon">📍</span>
                <div>
                  <p className="contact-key">Location</p>
                  <p className="contact-val">India</p>
                </div>
              </div>
              <div className="contact-row">
                <span className="contact-icon">💼</span>
                <div>
                  <p className="contact-key">Experience</p>
                  <p className="contact-val">3.6 Years</p>
                </div>
              </div>
              <div className="contact-row">
                <span className="contact-icon">🎯</span>
                <div>
                  <p className="contact-key">Focus</p>
                  <p className="contact-val">Frontend Engineering</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-content">
            <p className="about-lead">
              I'm a passionate <strong>Frontend Developer</strong> with 3.6 years of hands-on experience crafting exceptional web interfaces that users love.
            </p>
            <p className="text-muted">
              My journey began with React and has grown into deep expertise across the modern frontend ecosystem. I specialize in building performant, accessible, and beautifully designed applications — from pixel-level UI polish to architecting scalable state management with Redux, Saga, and Thunk.
            </p>
            <p className="text-muted" style={{ marginTop: "1rem" }}>
              I'm driven by the craft of frontend engineering — whether it's optimizing render performance, integrating complex GraphQL and REST APIs, or building reusable component libraries that teams love to work with. Every line of code I write reflects both precision and care.
            </p>

            <div className="about-traits">
              {[
                { icon: "⚡", label: "Performance obsessed" },
                { icon: "🎨", label: "Design-aware dev" },
                { icon: "📐", label: "Clean code advocate" },
                { icon: "🧩", label: "Component architect" },
              ].map(t => (
                <div className="trait" key={t.label}>
                  <span className="trait-icon">{t.icon}</span>
                  <span>{t.label}</span>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <Link to="/skills" className="btn btn-primary">Explore Skills →</Link>
              <a href="/Dhanesh_A_Resume.pdf" download="Dhanesh_A_Resume.pdf" className="btn btn-outline">⬇ Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}