import React, { Component } from "react";
import "./Organizations.css";
import { Fade } from "react-reveal";

const skillsData = [
  {
    id: "sk-1",
    icon: "</>",
    gradient: "linear-gradient(135deg, #29b6f6, #0288d1)",
    category: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "PHP", "Redux"],
  },
  {
    id: "sk-2",
    icon: "⊞",
    gradient: "linear-gradient(135deg, #ab47bc, #6a1b9a)",
    category: "Frameworks & Libraries",
    skills: [
      "React.js",
      "React Native",
      "Spring Boot",
      "Django",
      "Laravel",
      "Bootstrap",
      "Tailwind CSS",
      "Express.js",
      "Vue.js",
    ],
  },
  {
    id: "sk-3",
    icon: "🗄",
    gradient: "linear-gradient(135deg, #ce93d8, #7b1fa2)",
    category: "Databases & Data Systems",
    skills: ["MySQL", "SQL Server", "SQLite", "MongoDB (NoSQL)"],
  },
  {
    id: "sk-4",
    icon: "☁",
    gradient: "linear-gradient(135deg, #4dd0e1, #00838f)",
    category: "Cloud & DevOps",
    skills: [
      "Microsoft Azure",
      "Docker",
      "Kubernetes",
      "Git",
      "Github",
      "GitLab",
      "CI/CD Pipelines",
      "Postman",
      "Vercel",
    ],
  },
  {
    id: "sk-5",
    icon: ">_",
    gradient: "linear-gradient(135deg, #f48fb1, #c2185b)",
    category: "Tools & IDEs",
    skills: [
      "VS Code",
      "Visual Studio",
      "StarUML",
      "Figma",
      "Docker Desktop",
      "Cursor",
    ],
  },
  {
    id: "sk-6",
    icon: "≡",
    gradient: "linear-gradient(135deg, #ffb74d, #e65100)",
    category: "Modeling & Methodologies",
    skills: ["UML", "Merise", "Agile Scrum"],
  },
  {
    id: "sk-7",
    icon: "⚡",
    gradient: "linear-gradient(135deg, #4db6ac, #00695c)",
    category: "Backend & APIs",
    skills: ["RESTful APIs", "JWT Authentication", "API Integration", "JSON"],
  },
  {
    id: "sk-8",
    icon: "🌐",
    gradient: "linear-gradient(135deg, #81c784, #2e7d32)",
    category: "Web & Mobile Technologies",
    skills: [
      "HTML5",
      "CSS3",
      "Accessibility",
      "TailwindCSS",
      "React Native",
      "Responsive Design",
    ],
  },
];

class Organizations extends Component {
  render() {
    const theme = this.props.theme;
    const isDark =
      theme.body === "#1C1C1C" ||
      theme.name === "dark" ||
      (theme.body && theme.body.toLowerCase().includes("1c"));

    return (
      <div id="organizations">
        <div className="organizations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="organizations-header" style={{ color: theme.text }}>
              Technical Skills
            </h1>
          </Fade>
        </div>

        <div className="sk-grid">
          {skillsData.map((group, i) => (
            <Fade
              key={group.id}
              bottom
              duration={1800}
              distance="40px"
              delay={i * 60}
            >
              <div
                className="sk-card"
                style={{
                  backgroundColor: theme.highlight1,
                  border: `1px solid ${
                    isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"
                  }`,
                }}
              >
                {/* Large rounded icon */}
                <div
                  className="sk-icon-wrap"
                  style={{ background: group.gradient }}
                >
                  <span className="sk-icon-glyph">{group.icon}</span>
                </div>

                {/* Category title */}
                <p className="sk-cat-title" style={{ color: theme.text }}>
                  {group.category}
                </p>

                {/* Tags */}
                <div className="sk-tags-row">
                  {group.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="sk-tag"
                      style={{
                        color: theme.secondaryText,
                        borderColor: isDark
                          ? "rgba(255,255,255,0.18)"
                          : "rgba(0,0,0,0.18)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    );
  }
}

export default Organizations;
