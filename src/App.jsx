
import { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  ArrowRight,
  ArrowDownToLine,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  Code,
  BriefcaseBusiness,
  Users,
} from "lucide-react";

import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiFigma,
  SiGit,
  SiPython,
} from "react-icons/si";

import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaCss3Alt,
} from "react-icons/fa";

import "./App.css";

// ==============================
// TECH STACK
// ==============================

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
];

// ==============================
// CERTIFICATIONS
// ==============================

const certificates = [
  {
    title: "IT Specialist",
    subtitle: "HTML and CSS",
    organization: "Certiport",
    year: "2025",
    number: "01",
    image: "/certifications/its_html-css.png",
  },
  {
    title: "IT Specialist",
    subtitle: "Databases",
    organization: "Certiport",
    year: "2025",
    number: "02",
    image: "/certifications/its_databases.png",
  },
  {
    title: "Responsive Web Design",
    subtitle: "Developer Certification",
    organization: "freeCodeCamp",
    year: "2025",
    number: "03",
    image: "/certifications/web_design.png",
  },
  {
    title: "Python Data Associate",
    subtitle: "Data Certification",
    organization: "DataCamp",
    year: "2025",
    number: "04",
    image: "/certifications/python_data_associate.png",
  },
  {
    title: "Python Fundamentals for Data Science",
    subtitle: "Data Certification",
    organization: "Data Analytics Philippines",
    year: "2025",
    number: "05",
    image: "/certifications/python_fundamentals.png",
  },
  {
    title: "IT Specialist",
    subtitle: "Network Security",
    organization: "Certiport",
    year: "2026",
    number: "06",
    image: "/certifications/its_networksec.png",
  },
];

// ==============================
// PROJECTS
// ==============================

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern shopping experience designed to make online shopping simple and enjoyable.",
    stack: ["React", "JavaScript", "CSS"],
    images: [
      "/projects/ecommerce-1.png",
      "/projects/ecommerce-2.png",
      "/projects/ecommerce-3.png",
    ],
  },
  {
    title: "TaskFlow App",
    description:
      "A simple productivity application for organizing tasks and tracking progress.",
    stack: ["React", "Firebase", "CSS"],
    images: [
      "/projects/taskflow-1.png",
      "/projects/taskflow-2.png",
      "/projects/taskflow-3.png",
    ],
  },
  {
    title: "Media Dashboard",
    description:
      "A clean dashboard that brings media content and useful insights together.",
    stack: ["React", "Node.js", "MongoDB"],
    images: [
      "/projects/dashboard-1.png",
      "/projects/dashboard-2.png",
      "/projects/dashboard-3.png",
    ],
  },
  {
    title: "Analytics Pro",
    description:
      "An analytics interface that turns information into clear visual insights.",
    stack: ["React", "Python", "Chart.js"],
    images: [
      "/projects/analytics-1.png",
      "/projects/analytics-2.png",
      "/projects/analytics-3.png",
    ],
  },
];

// ==============================
// PROJECT POPUP
// ==============================

function ProjectModal({ project, onClose }) {
  const [imageIndex, setImageIndex] = useState(0);

  const images = project.images || [];

  const nextImage = () => {
    setImageIndex((current) => (current + 1) % images.length);
  };

  const previousImage = () => {
    setImageIndex(
      (current) => (current - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") previousImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, images.length]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="project-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <X />
        </button>

        {/* PROJECT IMAGE CAROUSEL */}

        <div className="modal-gallery">
          <div className="modal-image-wrapper">
            <img
              className="modal-main-image"
              src={images[imageIndex]}
              alt={`${project.title} screenshot ${imageIndex + 1}`}
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="image-fallback modal-fallback">
              {project.title} Preview
            </div>
          </div>

          {images.length > 1 && (
            <div className="modal-gallery-controls">
              <button
                className="modal-arrow"
                onClick={previousImage}
                aria-label="Previous project image"
              >
                <ChevronLeft />
              </button>

              <span>
                {imageIndex + 1} / {images.length}
              </span>

              <button
                className="modal-arrow"
                onClick={nextImage}
                aria-label="Next project image"
              >
                <ChevronRight />
              </button>
            </div>
          )}

          <div className="modal-thumbnails">
            {images.map((image, index) => (
              <button
                key={image}
                className={`modal-thumbnail ${
                  imageIndex === index ? "active" : ""
                }`}
                onClick={() => setImageIndex(index)}
                aria-label={`View project image ${index + 1}`}
              >
                <img
                  src={image}
                  alt=""
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* PROJECT INFORMATION */}

        <div className="modal-information">
          <span className="eyebrow">FEATURED PROJECT</span>

          <h2>{project.title}</h2>

          <p>{project.description}</p>

          <h3>Technologies Used</h3>

          <div className="tags">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==============================
// MAIN APP
// ==============================

function App() {
  const [dark, setDark] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectIndex, setProjectIndex] = useState(0);
  const [activeCertificate, setActiveCertificate] = useState(0);

  // ==============================
  // PROJECT AUTO ROTATION
  // ==============================

  useEffect(() => {
    const timer = setInterval(() => {
      setProjectIndex(
        (current) => (current + 1) % projects.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // ==============================
  // PROJECT NAVIGATION
  // ==============================

  const nextProject = () => {
    setProjectIndex(
      (current) => (current + 1) % projects.length
    );
  };

  const previousProject = () => {
    setProjectIndex(
      (current) =>
        (current - 1 + projects.length) % projects.length
    );
  };

  const orderedProjects = projects.map(
    (_, index) =>
      projects[(projectIndex + index) % projects.length]
  );

  // ==============================
  // CERTIFICATION NAVIGATION
  // Clicking the front image moves
  // to the next certificate.
  // ==============================

  const nextCertificate = () => {
    setActiveCertificate(
      (current) => (current + 1) % certificates.length
    );
  };

  return (
    <div className={dark ? "app dark" : "app"}>

      {/* ==============================
          NAVIGATION
      ============================== */}

      <header className="navbar">
        <a href="#home" className="logo">
          Julia<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#tech-stack">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="theme-button"
          onClick={() => setDark((current) => !current)}
          aria-label="Toggle theme"
        >
          {dark ? <Sun /> : <Moon />}
        </button>
      </header>

      {/* ==============================
          HOME
      ============================== */}

      <section className="hero section-container" id="home">
        <div className="hero-content">
          <h1>
            Hi, I'm <span>Julia!</span>
          </h1>

          <h2>
            Full-stack developer, illustrator,
            and an aspiring data scientist.
          </h2>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              View My Works <ArrowRight size={16} />
            </a>

            <a
              href="/julia-cv.pdf"
              download
              className="button outline"
            >
              Download CV <ArrowDownToLine size={16} />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="orbit"></div>

          <div className="portrait hero-portrait">
            <img
              src="/me_photo.png"
              alt="Julia"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      </section>

      {/* ==============================
          ABOUT + CERTIFICATIONS
      ============================== */}

      <section className="about-section" id="about">
        <div className="about-container">

          {/* LEFT SIDE: ABOUT */}

          <div className="about-content">

            <h2>
              A Little About <span>Me.</span>
            </h2>

            <p>
              I'm Julia, a full-stack developer, illustrator,
              and aspiring data scientist. I enjoy combining
              creativity and technology to create meaningful
              digital experiences.
            </p>

            <p>
              I love learning new technologies, exploring
              creative ideas, and challenging myself to grow
              both personally and professionally.
            </p>

            <div className="about-highlight">
              <span className="highlight-dot"></span>
              Always learning. Always creating.
            </div>
          </div>

          {/* RIGHT SIDE: CERTIFICATIONS */}

          <div className="certificate-area">
            <div className="certificate-heading">

            </div>

            <div className="certificate-stack">
              {certificates.map((certificate, index) => {
                const position =
                  (index -
                    activeCertificate +
                    certificates.length) %
                  certificates.length;

                return (
                  <div
                    key={certificate.number}
                    className={`certificate-card certificate-position-${position} ${
                      position === 0 ? "is-active" : ""
                    }`}
                    onClick={
                      position === 0 ? nextCertificate : undefined
                    }
                    role={position === 0 ? "button" : undefined}
                    tabIndex={position === 0 ? 0 : -1}
                    onKeyDown={(event) => {
                      if (
                        position === 0 &&
                        (event.key === "Enter" || event.key === " ")
                      ) {
                        event.preventDefault();
                        nextCertificate();
                      }
                    }}
                    aria-label={
                      position === 0
                        ? `View next certificate. Current certificate: ${certificate.title}`
                        : undefined
                    }
                  >
                    <img
                      src={certificate.image}
                      alt={`${certificate.title} certificate`}
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />

                    <div className="certificate-placeholder">
                      <span className="certificate-number">
                        {certificate.number}
                      </span>

                      <h4>{certificate.title}</h4>
                      <p>{certificate.subtitle}</p>

                      <div className="certificate-placeholder-footer">
                        <span>{certificate.organization}</span>
                        <span>{certificate.year}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <span className="certificate-counter">
              {String(activeCertificate + 1).padStart(2, "0")} /{" "}
              {String(certificates.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </section>

      {/* ==============================
          TECH STACK
      ============================== */}

      <section
        className="tech-section section-container"
        id="tech-stack"
      >
        <div className="tech-description">
         
          <h2>
            Tech <span>Stack</span>
          </h2>

          <p>
            A blend of modern technologies to bring ideas to life.
          </p>
        </div>

<div className="skills-window">
  <div className="skills-track">
    {[...skills, ...skills].map((skill, index) => {
      const SkillIcon = skill.icon;

      return (
        <div className="skill-card" key={`${skill.name}-${index}`}>
          <SkillIcon
            className="skill-icon"
            style={{ color: skill.color }}
          />
          <small>{skill.name}</small>
        </div>
      );
    })}
  </div>
</div>
      </section>

      {/* ==============================
          FEATURED PROJECTS
      ============================== */}

      <section
        className="projects section-container"
        id="projects"
      >
<div className="projects-heading">
  <h2>Featured Projects</h2>
  <p>
    Explore some of the projects I've worked on and the ideas I've brought to life.
  </p>
</div>


        <div className="project-grid">
          
          {orderedProjects.map((project) => (
            <article
              className="project-card"
              key={project.title}
              onClick={() => setSelectedProject(project)}
              tabIndex={0}
              role="button"
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" ||
                  event.key === " "
                ) {
                  event.preventDefault();
                  setSelectedProject(project);
                }
              }}
            >
              <div className="project-image">
                <div className="image-fallback">
                  {project.title}
                </div>

                <img
                  src={project.images[0]}
                  alt={project.title}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="project-information">
                <h3>
                  {project.title}
                  <ArrowUpRight size={16} />
                </h3>

                <p>{project.description}</p>

                <div className="tags">
                  {project.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          
        </div>
        
<div className="project-arrows">
  <button onClick={previousProject}>
    <ChevronLeft size={20} />
  </button>

  <button onClick={nextProject}>
    <ChevronRight size={20} />
  </button>
</div>
      </section>

      {/* ==============================
          CONTACT
      ============================== */}

      <section
        className="contact section-container"
        id="contact"
      >
        <div className="contact-content">
          <span className="eyebrow">✦ GET IN TOUCH</span>

          <h2>
            Let's Build Something <br />
            Amazing <span>Together</span>
          </h2>

          <p>
            Have an idea in mind? Let's make something
            thoughtful, useful, and a little delightful.
          </p>

          <a
            href="/julia-cv.pdf"
            download
            className="button primary"
          >
            Download CV <ArrowDownToLine size={16} />
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <BriefcaseBusiness />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Code />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <Users />
          </a>
        </div>
      </section>

      {/* ==============================
          FOOTER
      ============================== */}

      <footer className="footer section-container">
        <a href="#home" className="logo">
          Julia<span>.</span>
        </a>

        <p>
          © {new Date().getFullYear()} Julia. Made with love.
        </p>
      </footer>

      {/* ==============================
          PROJECT DETAILS POPUP
      ============================== */}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;
