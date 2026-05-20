import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

const roles = ["Frontend Developer", "React Specialist", "UI Craftsman", "TypeScript Enthusiast"];

export default function Home() {
  const roleRef = useRef(null);
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    let timeout;
    function type() {
      const current = roles[indexRef.current];
      if (!deletingRef.current) {
        charRef.current++;
        if (roleRef.current) roleRef.current.textContent = current.slice(0, charRef.current);
        if (charRef.current === current.length) {
          deletingRef.current = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        charRef.current--;
        if (roleRef.current) roleRef.current.textContent = current.slice(0, charRef.current);
        if (charRef.current === 0) {
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % roles.length;
        }
      }
      timeout = setTimeout(type, deletingRef.current ? 60 : 90);
    }
    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="home-page">
      <div className="hero-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grid-lines" />
      </div>

      <div className="container hero-container">
        <div className="hero-badge animate-fade-up">
          <span className="badge-dot" />
          Available for opportunities
        </div>

        <h1 className="hero-name animate-fade-up delay-1">
          Hi, I'm <span className="gradient-text">Dhanesh A</span>
        </h1>

        <div className="hero-role-wrap animate-fade-up delay-2">
          <span className="role-static">I'm a </span>
          <span className="role-typed" ref={roleRef} />
          <span className="cursor-blink">|</span>
        </div>

        <p className="hero-desc animate-fade-up delay-3">
          3.6 years of turning complex ideas into pixel-perfect, blazing-fast web experiences.
          Specializing in <strong>React</strong>, <strong>TypeScript</strong>, <strong>Redux</strong>, <strong>GraphQL</strong> and scalable frontend architecture.
        </p>

        <div className="hero-actions animate-fade-up delay-4">
          <Link to="/projects" className="btn btn-primary">View My Work →</Link>
          <Link to="/contact" className="btn btn-outline">Let's Talk</Link>
        </div>

        <div className="hero-stats animate-fade-up delay-5">
          {[
            { num: "3.6+", label: "Years Experience" },
            { num: "15+", label: "Projects Shipped" },
            { num: "8+", label: "Tech Mastered" },
            { num: "100%", label: "Passion Driven" },
          ].map(s => (
            <div className="stat-item" key={s.label}>
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="floating-pills"> 
        {["React Js", "JavaScript", "TypeScript", "GraphQL API", "REST API", "Redux"].map((t, i) => (
          <span key={t} className="pill" style={{ animationDelay: `${i * 0.4}s` }}>{t}</span>
        ))}
      </div>

      {/* <div className="scroll-hint">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div> */}
    </div>
  );
}