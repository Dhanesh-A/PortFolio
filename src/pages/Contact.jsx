import { useState } from "react";
import "../Styles/Contact.css";

// ─── EmailJS Config ───────────────────────────────────────────────
// SETUP STEPS (free, takes 5 mins):
// 1. Go to https://www.emailjs.com and create a free account
// 2. Add a service → connect your Gmail (dev.dhanesh15@gmail.com)
// 3. Create an email template — use these variables in it:
//      {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Replace the three values below with your real IDs
const EMAILJS_SERVICE_ID  = "service_azqf4i7";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_zioxxht";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "8R7J0snVIHxOJ8APF";   // e.g. "aBcDeFgHiJkLmNoP"
// ─────────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm]       = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus]   = useState("idle"); // idle | sending | sent | error

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id:  EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id:     EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name:  form.name,
            from_email: form.email,
            subject:    form.subject || "Portfolio Contact",
            message:    form.message,
            to_email:   "dev.dhanesh15@gmail.com",
          },
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const socials = [
    {
      label: "LinkedIn",
      icon: "💼",
      url: "https://www.linkedin.com/in/dhanesh-a-85758b1b2",
      hint: "linkedin.com/in/dhanesh-a-85758b1b2",
    },
    {
      label: "GitHub",
      icon: "🐙",
      url: "https://github.com/Dhanesh-A",
      hint: "github.com/Dhanesh-A",
    },
    {
      label: "Email",
      icon: "✉️",
      url: "mailto:dev.dhanesh15@gmail.com",
      hint: "dev.dhanesh15@gmail.com",
    },
    // {
    //   label: "Portfolio",
    //   icon: "🚀",
    //   url: "#",
    //   hint: "Coming soon after deployment",
    // },
  ];

  return (
    <div className="page">
      <div className="container">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
        <div className="section-divider" />

        <div className="contact-grid">
          <div className="contact-left">
            <div className="card contact-intro">
              <div className="intro-emoji">👋</div>
              <h3 className="intro-title">Open to opportunities</h3>
              <p className="text-muted" style={{ fontSize: "0.93rem" }}>
                I'm actively looking for exciting frontend roles where I can build great products,
                collaborate with talented teams, and keep growing as an engineer.
              </p>
            </div>

            <div className="social-links">
              {socials.map(s => (
                <a
                  href={s.url}
                  key={s.label}
                  className="card social-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="social-icon">{s.icon}</div>
                  <div>
                    <p className="social-label">{s.label}</p>
                    <p className="social-hint text-muted">{s.hint}</p>
                  </div>
                  <span className="social-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-right">
            {status === "sent" ? (
              <div className="card sent-card">
                <div className="sent-emoji">🎉</div>
                <h3 className="sent-title gradient-text">Message Sent!</h3>
                <p className="text-muted">
                  Thanks for reaching out! I'll reply to you at <strong>{form.email || "your email"}</strong> within 24 hours.
                </p>
                <button
                  className="btn btn-outline"
                  style={{ marginTop: "1.5rem" }}
                  onClick={() => setStatus("idle")}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <div className="card contact-form-card">
                <h3 className="form-title">Drop a Message</h3>

                {status === "error" && (
                  <div className="form-error">
                    ⚠️ Something went wrong. Please set up your EmailJS keys or email me directly at{" "}
                    <a href="mailto:dev.dhanesh15@gmail.com">dev.dhanesh15@gmail.com</a>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        disabled={status === "sending"}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        disabled={status === "sending"}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      name="subject"
                      placeholder="Frontend Developer Role · Collaboration · etc."
                      value={form.subject}
                      onChange={handleChange}
                      disabled={status === "sending"}
                    />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell me about the opportunity..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      disabled={status === "sending"}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending…" : "Send Message ✈️"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}