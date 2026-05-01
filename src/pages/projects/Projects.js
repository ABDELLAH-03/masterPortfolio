import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import "./Projects.css";
import card from "../../assets/images/card.jpeg";
import film from "../../assets/images/movie.jpeg";
import meteo from "../../assets/images/meteo.jpeg";
import cms from "../../assets/images/cms.webp";
import store from "../../assets/images/store.jpeg";

/* ── Projects data ─────────────────────────────────────────────────── */
const projectsData = [
  {
    id: 1,
    name: "Film Management",
    category: "Web Apps",
    icon: "</>",
    iconGradient: "linear-gradient(135deg, #29b6f6, #0288d1)",
    liveUrl: "https://moviehub-ac.vercel.app/",
    githubUrl: "https://github.com/ABDELLAH-03/movies-app-",
    description:
      "Collaborative film library with real-time tracking and production insights. Built with React-Vite and Tailwind CSS.",
    features: [
      "Real-time film tracking & updates",
      "Collaborative library management",
      "Responsive modern UI with Tailwind",
    ],
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    screenshot: film,
  },
  {
    id: 2,
    name: "Meteo App",
    category: "Web Apps",
    icon: "☁",
    iconGradient: "linear-gradient(135deg, #4dd0e1, #00838f)",
    liveUrl: "",
    githubUrl: "https://github.com/ABDELLAH-03/meteo-app",
    description:
      "Weather app with real-time data and forecasts for any location worldwide using the OpenWeatherMap API.",
    features: [
      "Real-time weather data via API",
      "Multi-location search & forecast",
      "Dynamic weather condition icons",
    ],
    tags: ["React", "Node.js", "OpenWeatherMap API", "CSS3"],
    screenshot: meteo,
  },
  {
    id: 3,
    name: "Multi Player Card Game",
    category: "Web Apps",
    icon: "🃏",
    iconGradient: "linear-gradient(135deg, #ab47bc, #6a1b9a)",
    liveUrl: "",
    githubUrl: "https://github.com/ABDELLAH-03/game",
    description:
      "Real-time multiplayer card game platform powered by Node.js, Socket.io and React with synchronized game state.",
    features: [
      "Real-time PVP via Socket.io",
      "Synchronized game state management",
      "MongoDB-backed player sessions",
    ],
    tags: ["Node.js", "Socket.io", "React", "MongoDB"],
    screenshot: card,
  },
  {
    id: 4,
    name: "Mini CMS",
    category: "Web Apps",
    icon: "≡",
    iconGradient: "linear-gradient(135deg, #ffb74d, #e65100)",
    liveUrl: "",
    githubUrl: "https://github.com/ABDELLAH-03/mini-cmsH",
    description:
      "Content Management System with rich text editing via CKEditor, built with Laravel and SQLite.",
    features: [
      "Rich text editing with CKEditor",
      "Admin dashboard & content control",
      "Laravel backend with SQLite",
    ],
    tags: ["Laravel", "SQLite", "Tailwind CSS", "CKEditor"],
    screenshot: cms,
  },
  {
    id: 5,
    name: "E-commerce Store",
    category: "Web Apps",
    icon: "🛒",
    iconGradient: "linear-gradient(135deg, #81c784, #2e7d32)",
    liveUrl: "",
    githubUrl: "https://github.com/ABDELLAH-03/marketplace",
    description:
      "Full-featured e-commerce platform with product catalog, cart management, and secure JWT authentication.",
    features: [
      "JWT-secured user authentication",
      "Product catalog & cart management",
      "Django REST API backend",
    ],
    tags: ["Django", "React", "JWT", "REST API", "SQLite"],
    screenshot: store,
  },
];

/* ── ExternalLinkIcon ──────────────────────────────────────────────── */
function ExternalLinkIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

/* ── ScreenshotPlaceholder ─────────────────────────────────────────── */
function ScreenshotPlaceholder({ project }) {
  return (
    <div
      className="fp-screenshot"
      onClick={() => project.liveUrl && window.open(project.liveUrl, "_blank")}
    >
      <img
        src={project.screenshot}
        alt={project.name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}

/* ── ProjectCard ───────────────────────────────────────────────────── */
function ProjectCard({ project, theme }) {
  const isDark =
    theme.body && (theme.body === "#1C1C1C" || theme.body.startsWith("#1"));

  return (
    <div
      className="fp-card"
      style={{
        backgroundColor: theme.highlight1,
        border: `1px solid ${
          isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"
        }`,
      }}
    >
      <ScreenshotPlaceholder project={project} />

      <div className="fp-card-body">
        <div className="fp-title-row">
          <div
            className="fp-icon-wrap"
            style={{ background: project.iconGradient }}
          >
            <span className="fp-icon-glyph">{project.icon}</span>
          </div>
          <div className="fp-title-text">
            <h3 className="fp-proj-name" style={{ color: theme.text }}>
              {project.name}
            </h3>
            <span
              className="fp-proj-cat"
              style={{ color: theme.accentColor || "#29b6f6" }}
            >
              {project.category}
            </span>
          </div>
          <div className="fp-ext-links">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fp-ext-btn"
                style={{ color: theme.secondaryText }}
                title="Live Demo"
              >
                <ExternalLinkIcon />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fp-ext-btn"
                style={{ color: theme.secondaryText }}
                title="GitHub"
              >
                <ExternalLinkIcon />
              </a>
            )}
          </div>
        </div>

        <p className="fp-description" style={{ color: theme.secondaryText }}>
          {project.description}
        </p>

        <div className="fp-features-label" style={{ color: theme.text }}>
          <span className="fp-features-icon">⊞</span> Key Features
        </div>
        <ul className="fp-features-list">
          {project.features.map((f, i) => (
            <li key={i} style={{ color: theme.secondaryText }}>
              <span
                className="fp-bullet"
                style={{ color: theme.accentColor || "#29b6f6" }}
              >
                ▸
              </span>
              {f}
            </li>
          ))}
        </ul>

        <div className="fp-tags-row">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="fp-tag"
              style={{
                color: theme.secondaryText,
                borderColor: isDark
                  ? "rgba(255,255,255,0.2)"
                  : "rgba(0,0,0,0.18)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Main Projects page ────────────────────────────────────────────── */
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeFilter: "All" };
  }

  render() {
    const theme = this.props.theme;
    const { activeFilter } = this.state;

    const filtered =
      activeFilter === "All"
        ? projectsData
        : projectsData.filter((p) => p.category === activeFilter);

    return (
      <div className="projects-main">
        <Header theme={theme} />

        {/* ── Page heading ── */}
        <div className="fp-heading-section">
          <Fade bottom duration={2000} distance="40px">
            <h1
              className="fp-main-title"
              style={{ color: theme.accentColor || "#29b6f6" }}
            >
              Featured Projects
            </h1>
            <p
              className="fp-main-subtitle"
              style={{ color: theme.secondaryText }}
            >
              A selection of my most impactful and innovative work
            </p>
          </Fade>
        </div>

        {/* ── Cards grid ── */}
        <div className="fp-grid">
          {filtered.map((project, i) => (
            <Fade
              key={project.id}
              bottom
              duration={1800}
              distance="40px"
              delay={i * 80}
            >
              <ProjectCard project={project} theme={theme} />
            </Fade>
          ))}
        </div>

        {/* ── More projects button ── */}
        <div className="fp-more-btn-wrap">
          <a
            className="fp-more-btn"
            href={greeting.githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: theme.accentColor || "#29b6f6",
              color: "#fff",
            }}
          >
            More Projects
          </a>
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
