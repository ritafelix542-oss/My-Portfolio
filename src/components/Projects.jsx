 import {
  FaFilm,
  FaCode,
  FaRocket,
  FaShoppingCart,
  FaCalculator,
  FaUtensils,
  FaExternalLinkAlt,
  FaGithub,
  FaGraduationCap,
} from "react-icons/fa";

const projects = [
  {
    icon: <FaFilm />,
    title: "Movie App",
    desc: "A movie discovery app built with React and Vite, featuring search, trending movies, and detailed info using the TMDB API.",
    tags: ["React", "Vite", "TMDB API"],
    liveLink: "", // Add your actual deployed MovieHub link here
    githubLink: "https://github.com/ritafelix542-oss/Moviehub-react.git",
  },

  {
    icon: <FaCode />,
    title: "Programming Site",
    desc: "An interactive learning platform for C programming beginners with code examples, quizzes, and tutorials.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "", 
    githubLink: "https://github.com/yourusername/c-programming",
  },

  {
    icon: <FaRocket />,
    title: "Landing Page",
    desc: "A modern, responsive landing page with hero section, features grid, and call-to-action.",
    tags: ["HTML", "CSS", "Responsiveness"],
    liveLink: "", 
    githubLink: "https://github.com/ritafelix542-oss/Techrise3.0.git",
  },

  {
    icon: <FaShoppingCart />,
    title: "E-Commerce Website",
    desc: "A fully functional e-commerce site with product listings, cart functionality, and checkout flow.",
    tags: ["React", "Vite", "Context API"],
    liveLink: "", 
    githubLink: "https://github.com/ritafelix542-oss/Ecommerce-react.git",
  },

  {
    icon: <FaCalculator />,
    title: "Calculator",
    desc: "A sleek, fully functional calculator with keyboard support, history tracking, and responsive design.",
    tags: ["JavaScript", "HTML", "CSS"],
    liveLink: "https://my-first-calculator-woad.vercel.app/",
    githubLink: "https://github.com/ritafelix542-oss/My-first-Calculator.git",
  },

  {
    icon: <FaUtensils />,
    title: "Afang Soup Recipe",
    desc: "A beautiful recipe website for the classic Nigerian Afang Soup with step-by-step instructions and ingredients.",
    tags: ["HTML", "CSS", "Responsive"],
    liveLink: "https://afang-soup.netlify.app/",
    githubLink: "https://github.com/ritafelix542-oss/Afang-Soup.git",
  },

  {
    icon: <FaGraduationCap />,
    title: "Student Grade Checker",
    desc: "A simple and user-friendly application that allows students to check their scores, grades, and pass or fail status.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://student-grade-checker.netlify.app/",
    githubLink:
      "https://github.com/ritafelix542-oss/Student-Grade-Checker.git",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        position: "relative",
        zIndex: 1,
        background: "rgba(10, 10, 10, 0.8)",
        padding: "5rem 2rem",
      }}
    >
      <div className="section-header reveal text-amber-400 border-b pb-5 text-center">
        <span className="section-tag font-bold text-5xl">My Projects</span>

        <h2>
          Featured <span className="text-3xl" style={{ color: "#ffdd4d" }}>Works</span>
        </h2>

        <h3 className="text-amber-500">
          Here are some of the projects I've built. Click to visit the live
          sites!
        </h3>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({
  icon,
  title,
  desc,
  tags,
  liveLink,
  githubLink,
}) => {
  return (
    <div
      className="reveal project-card"
      style={{
        background: "#0a0a0a",
        border: "1px solid rgba(255, 221, 77, 0.1)",
        borderRadius: "20px",
        overflow: "hidden",
        transition: "all 0.4s ease",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.borderColor =
          "rgba(255, 221, 77, 0.4)";
        e.currentTarget.style.boxShadow =
          "0 20px 60px rgba(0,0,0,0.8), 0 0 30px rgba(255, 221, 77, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor =
          "rgba(255, 221, 77, 0.1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* IMAGE / ICON AREA */}
      <div
        style={{
          height: "200px",
          background:
            "linear-gradient(135deg, rgba(255, 221, 77, 0.15), rgba(255, 149, 0, 0.1))",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3rem",
          color: "#ffdd4d",
        }}
      >
        <span style={{ zIndex: 1 }}>{icon}</span>

        {/* Gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, #0a0a0a, transparent)",
          }}
        />

        {/* BUTTONS */}
        <div
          className="project-buttons"
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            opacity: 0,
            transition: "opacity 0.3s ease",
            zIndex: 5,
          }}
        >
          {/* LIVE SITE */}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "0.7rem 1.5rem",
                borderRadius: "10px",
                background: "#141414",
                border: "1px solid rgba(255, 221, 77, 0.3)",
                color: "#ffdd4d",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <FaExternalLinkAlt size={12} />
              Live Site
            </a>
          )}

          {/* GITHUB */}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "0.7rem 1.5rem",
                borderRadius: "10px",
                background: "#141414",
                border: "1px solid rgba(255, 221, 77, 0.3)",
                color: "#ffdd4d",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <FaGithub size={14} />
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* PROJECT DETAILS */}
      <div style={{ padding: "1.5rem" }}>
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            marginBottom: "1rem",
            flexWrap: "wrap",
          }}
        >
          {tags.map((tag, i) => (
            <span
              key={i}
              style={{
                padding: "0.25rem 0.75rem",
                background: "rgba(255, 221, 77, 0.1)",
                border: "1px solid rgba(255, 221, 77, 0.25)",
                borderRadius: "100px",
                fontSize: "0.75rem",
                color: "#ffdd4d",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3
          style={{
            fontSize: "1.3rem",
            marginBottom: "0.5rem",
            color: "#ffdd4d",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            color: "rgba(255, 221, 77, 0.6)",
            fontSize: "0.95rem",
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Projects;