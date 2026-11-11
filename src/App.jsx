
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
  Users,
  GraduationCap,
  Palette,
  Handshake,
  BookOpen,
  Laptop,
  Maximize2,
} from "lucide-react";

import {FaLinkedin, FaGithub, FaFacebook} from "react-icons/fa";

import StarBackground from "./star_background";

import "./App.css";

// =========================================
// JOURNEY - Work Experience, Leadership, Education
// =========================================

const journeyItems = [
  {
    category: "Education",
    title: "Bachelor of Science in Computer Science",
    organization: "University of Mindanao",
    date: "September 2022 – September 2026",
    highlights: [
      "Graduated Summa Cum Laude.",
      "Earned a degree in Computer Science.",
    ],
    icon: GraduationCap,
  },
  {
    category: "Experience",
    title: "Web Developer / Designer",
    organization: "Consumr Buzz",
    date: "January 2026 – June 2026",
    highlights: [
      "Designed and built responsive websites using Duda.",
      "Customized features with HTML, CSS, and JavaScript, and created visual assets.",
    ],
    icon: Laptop,
  },
  {
    category: "Experience",
    title: "Broadband Intern",
    organization: "Globe Telecom Inc.",
    date: "July 2025 – August 2025",
    highlights: [
      "Developed a mobile app for field technicians' tool tracking.",
      "Supported team operations and reporting, and built a Python tool to automate log entry.",
    ],
    icon: Laptop,
  },
  {
    category: "Experience",
    title: "Illustrator",
    organization: "Freelance / Commissioned",
    date: "2022 – 2025",
    highlights: [
      "Created custom digital illustrations for international clients.",
      "Adapted art styles to client needs and managed revisions and delivery.",
    ],
    icon: Palette,
  },
  {
    category: "Affiliation",
    title: "Membership and Community Keeper",
    organization: "Data Owls of the University of Mindanao",
    date: "2024 – 2025",
    highlights: [
      "Served as a core member of a student-led organization.",
      "Supported a community focused on data science, analytics, and technology.",
    ],
    icon: Users,
  },
  {
    category: "Affiliation",
    title: "Volunteer",
    organization: "University of Mindanao Student Developers Community",
    date: "2024 – 2025",
    highlights: [
      "Volunteered in community initiatives and collaborative learning.",
      "Participated in activities of the UM Student Developers Community.",
    ],
    icon: Handshake,
  },
  {
    category: "Education",
    title: "STEM Strand",
    organization: "Philippine Academy of Sakya Davao, Inc.",
    date: "2020 – 2022",
    highlights: [
      "Graduated Rank 1 in the STEM strand.",
      "Received 4th Honorable Mention overall.",
    ],
    icon: BookOpen,
  },
];

// =========================================
// TECHNICAL PROFICIENCY
// Logo positions are generated randomly
// =========================================

const skillCategories = [
  "Frontend",
  "Backend",
  "Database",
  "Tech Tools",
  "Creative Tools",
  "Office Tools",
];

const skills = [
  // FRONTEND
  {
    name: "HTML5",
    icon: <img src="/logos/html-5.svg" alt="HTML5" />,
    color: "#E34F26",
    category: "Frontend",
    size: 90,
  },
  {
    name: "CSS3",
    icon: <img src="/logos/css-3.svg" alt="CSS3" />,
    color: "#1572B6",
    category: "Frontend",
    size: 90,
  },
  {
    name: "React",
    icon: <img src="/logos/react.svg" alt="React" />,
    color: "#61DAFB",
    category: "Frontend",
    size: 80,
  },
  {
    name: "Vite",
    icon: <img src="/logos/vite.svg" alt="Vite" />,
    color: "#646CFF",
    category: "Frontend",
    size: 80,
  },
  {
    name: "JavaScript",
    icon: <img src="/logos/javascript.svg" alt="JavaScript" />,
    color: "#F7DF1E",
    category: "Frontend",
    size: 70,
  },

  // BACKEND
  {
    name: "Python",
    icon: <img src="/logos/python.svg" alt="Python" />,
    color: "#3776AB",
    category: "Backend",
    size:90,
  },
  {
    name: "PHP",
    icon: <img src="/logos/php.svg" alt="PHP" />,
    color: "#777BB4",
    category: "Backend",
    size: 80,
  },
  {
    name: "Java",
    icon: <img src="/logos/java.svg" alt="Java" />,
    color: "#ED8B00",
    category: "Backend",
    size: 70,
  },
  {
    name: "Node.js",
    icon: <img src="/logos/nodejs.svg" alt="Node.js" />,
    color: "#5FA04E",
    category: "Backend",
    size: 80,
  },

  // DATABASE
  {
    name: "MySQL",
    icon: <img src="/logos/mysql.svg" alt="MySQL" />,
    color: "#4479A1",
    category: "Database",
    size: 80,
  },
  {
    name: "Firebase",
    icon: <img src="/logos/firebase.svg" alt="Firebase" />,
    color: "#FFCA28",
    category: "Database",
    size: 80,
  },
  {
    name: "Supabase",
    icon: <img src="/logos/supabase.svg" alt="Supabase" />,
    color: "#3ECF8E",
    category: "Database",
    size: 80,
  },

  // TECH TOOLS
  {
    name: "Git",
    icon: <img src="/logos/git.svg" alt="Git" />,
    color: "#F05032",
    category: "Tech Tools",
    size: 90,
  },
  {
    name: "GitHub",
    icon: <img src="/logos/github.svg" alt="GitHub" />,
    color: "#8B8B8B",
    category: "Tech Tools",
    size: 80,
  },
  {
    name: "VS Code",
    icon: <img src="/logos/vscode.svg" alt="VS Code" />,
    color: "#007ACC",
    category: "Tech Tools",
    size: 70,
  },
  {
    name: "Eclipse",
    icon: <img src="/logos/eclipse.svg" alt="Eclipse" />,
    color: "#2C2255",
    category: "Tech Tools",
    size: 70,
  },
  {
    name: "XAMPP",
    icon: <img src="/logos/xampp.svg" alt="XAMPP" />,
    color: "#FB7A24",
    category: "Tech Tools",
    size: 60,
  },

  // CREATIVE TOOLS
  {
    name: "Figma",
    icon: <img src="/logos/figma.svg" alt="Figma" />,
    color: "#F24E1E",
    category: "Creative Tools",
    size: 80,
  },
  {
    name: "Canva",
    icon: <img src="/logos/canva.svg" alt="Canva" />,
    color: "#00C4CC",
    category: "Creative Tools",
    size: 70,
  },
  {
    name: "ibisPaint",
    icon: <img src="/logos/IbisPaint.svg" alt="ibisPaint" />,
    color: "#FA6D5B",
    category: "Creative Tools",
    size: 80,
  },
  {
    name: "CapCut",
    icon: <img src="/logos/capcut.svg" alt="CapCut" />,
    color: "#FFFFFF",
    category: "Creative Tools",
    size: 60,
  },

  // OFFICE & PRODUCTIVITY TOOLS
  {
    name: "Excel",
    icon: <img src="/logos/excel.svg" alt="Excel" />,
    color: "#217346",
    category: "Office Tools",
    size: 60,
  },
  {
    name: "Word",
    icon: <img src="/logos/word.svg" alt="Word" />,
    color: "#2B579A",
    category: "Office Tools",
    size: 60,
  },
  {
    name: "Google Sheets",
    icon: <img src="/logos/sheets.svg" alt="Google Sheets" />,
    color: "#34A853",
    category: "Office Tools",
    size: 70,
  },
  {
    name: "Google Docs",
    icon: <img src="/logos/docs.svg" alt="Google Docs" />,
    color: "#4285F4",
    category: "Office Tools",
    size: 70,
  },
  {
    name: "Notion",
    icon: <img src="/logos/notion.svg" alt="Notion" />,
    color: "#808080",
    category: "Office Tools",
    size: 60,
  },
  {
    name: "Slack",
    icon: <img src="/logos/slack.svg" alt="Slack" />,
    color: "#4A154B",
    category: "Office Tools",
    size: 70,
  },
  {
    name: "Trello",
    icon: <img src="/logos/trello.svg" alt="Trello" />,
    color: "#0052CC",
    category: "Office Tools",
    size: 70,
  },
  {
    name: "Zoom",
    icon: <img src="/logos/zoom.svg" alt="Zoom" />,
    color: "#0B5CFF",
    category: "Office Tools",
    size: 60,
  },
  {
    name: "Google Meet",
    icon: <img src="/logos/google-meet.svg" alt="Google Meet" />,
    color: "#00897B",
    category: "Office Tools",
    size: 60,
  },
  {
    name: "Microsoft Teams",
    icon: <img src="/logos/teams.svg" alt="Microsoft Teams" />,
    color: "#6264A7",
    category: "Office Tools",
    size: 70,
  },
];

// =========================================
// CERTIFICATIONS
// =========================================

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

// =========================================
// PROJECTS
// =========================================

const projects = [
  {
    title: "ExpenSure",
    description:
      "An expense tracker web application that will help users manage their expenses in a simple and efficient way.",
    stack: ["HTML", "JavaScript", "CSS", "PHP", "MySQL"],
    images: [
      "/projects/expensure/expensure1.png",
      "/projects/expensure/expensure2.png",
      "/projects/expensure/expensure3.png",
      "/projects/expensure/expensure4.png",
      "/projects/expensure/expensure5.png",
      "/projects/expensure/expensure6.png",
    ],
  },
  {
    title: "Palette App",
    description:
      "A mobile app that provides a platform where artists can showcase their artwork, interact, and build a digital portfolio.",
    stack: ["Flutter", "Dart", "Firebase", "Supabase"],
    images: [
      "/projects/palette/palette1.png",
      "/projects/palette/palette2.png",
      "/projects/palette/palette3.png",
      "/projects/palette/palette4.png",
      "/projects/palette/palette5.png",
      "/projects/palette/palette6.png",
    ],
  },
  {
    title: "NK Tools Tracker",
    description:
      "A mobile application for tracking and managing Globe/NK technicians' tools.",
    stack: ["Flutter", "Dart", "Firebase", "Firestore"],
    images: [
      "/projects/tools_tracker/tools_tracker1.png",
      "/projects/tools_tracker/tools_tracker2.png",
      "/projects/tools_tracker/tools_tracker3.png",
      "/projects/tools_tracker/tools_tracker4.png",
      "/projects/tools_tracker/tools_tracker5.png",
    ],
  },
  {
    title: "Solar Energy Potential Forecasting Web App",
    description:
      "A Feature-Importance-Aware AdaBoost (FI-AdaBoost) regression model for more interpretable and reliable solar energy potential forecasting.",
    stack: ["Python", "React", "TypeScript", "HTML", "CSS"],
    images: [
      "/projects/fi-adaboost/fi-adaboost1.png",
      "/projects/fi-adaboost/fi-adaboost2.png",
      "/projects/fi-adaboost/fi-adaboost3.png",
      "/projects/fi-adaboost/fi-adaboost4.png",
      "/projects/fi-adaboost/fi-adaboost5.png",
      "/projects/fi-adaboost/fi-adaboost6.png",
    ],
  },
];

// =========================================
// TYPING EFFECT
// =========================================

function TypingRole() {
  const roles = [
    "Developer",
    "Illustrator",
    "Designer",
    "Aspiring Data Scientist",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let delay = deleting ? 45 : 100;

    if (!deleting && text === currentRole) {
      delay = 1200;
    }

    if (deleting && text === "") {
      delay = 400;
    }

    const timer = setTimeout(() => {
      if (!deleting && text === currentRole) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setRoleIndex((current) => (current + 1) % roles.length);
      } else {
        setText(
          currentRole.substring(
            0,
            text.length + (deleting ? -1 : 1)
          )
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <span className="typing-role">
      {text}
      <span className="typing-cursor">|</span>
    </span>
  );
}

// =========================================
// PROJECT POPUP
// =========================================

function ProjectModal({ project, onClose }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
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
      if (event.key === "Escape") {
        if (isImageExpanded) {
          setIsImageExpanded(false);
        } else {
          onClose();
        }
      }

      if (images.length > 1 && event.key === "ArrowRight") {
        setImageIndex((current) => (current + 1) % images.length);
      }

      if (images.length > 1 && event.key === "ArrowLeft") {
        setImageIndex(
          (current) => (current - 1 + images.length) % images.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, images.length, isImageExpanded]);

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

        <div className="modal-gallery">
          <div className="modal-image-wrapper">
            <img
              src={project.images[imageIndex]}
              alt={`${project.title} screenshot ${imageIndex + 1}`}
              className="modal-main-image clickable-image"
              onClick={() => setIsImageExpanded(true)}
            />

            <button
              className="image-expand-button"
              onClick={() => setIsImageExpanded(true)}
              aria-label="Expand image"
            >
              <Maximize2 size={20} />
            </button>

            {isImageExpanded && (
              <div
                className="image-lightbox"
                onClick={() => setIsImageExpanded(false)}
              >
                <button
                  className="lightbox-close"
                  onClick={() => setIsImageExpanded(false)}
                  aria-label="Close image viewer"
                >
                  <X size={26} />
                </button>

                <button
                  className="lightbox-arrow lightbox-prev"
                  onClick={(event) => {
                    event.stopPropagation();
                    previousImage();
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={30} />
                </button>

                <img
                  src={project.images[imageIndex]}
                  alt={`${project.title} screenshot ${imageIndex + 1}`}
                  className="lightbox-image"
                  onClick={(event) => event.stopPropagation()}
                />

                <button
                  className="lightbox-arrow lightbox-next"
                  onClick={(event) => {
                    event.stopPropagation();
                    nextImage();
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight size={30} />
                </button>

                <div className="lightbox-counter">
                  {imageIndex + 1} / {project.images.length}
                </div>
              </div>
            )}
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

// =========================================
// MAIN APP
// =========================================

function App() {
  const [dark, setDark] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectIndex, setProjectIndex] = useState(0);
  const [activeCertificate, setActiveCertificate] = useState(0);
  const [activeSkillCategory, setActiveSkillCategory] = useState(null);

const [randomizedSkills] = useState(() => {
  const storageKey = "julia-portfolio-skill-positions-v2";

  const randomNormal = () => {
    const u = Math.max(Math.random(), 0.0001);
    const v = Math.random();

    return Math.sqrt(-2 * Math.log(u)) *
      Math.cos(2 * Math.PI * v);
  };

  const clamp = (value, min, max) =>
    Math.min(max, Math.max(min, value));

  let savedPositions = null;

  try {
    savedPositions = JSON.parse(
      localStorage.getItem(storageKey)
    );
  } catch {
    savedPositions = null;
  }

  const hasValidPositions =
    savedPositions &&
    skills.every(
      (skill) =>
        savedPositions[skill.name]?.left &&
        savedPositions[skill.name]?.top
    );

  if (!hasValidPositions) {
    savedPositions = {};

    // Shuffle skills so categories are mixed together.
    const shuffledSkills = [...skills].sort(
      () => Math.random() - 0.5
    );

    const placedSkills = [];

    shuffledSkills.forEach((skill) => {
      let bestPosition = null;
      let bestScore = -Infinity;

      // Try multiple positions to find a good spot.
      for (let attempt = 0; attempt < 1000; attempt++) {
        const spread = Math.random() < 0.85 ? 15 : 23;

        const left = clamp(
          50 + randomNormal() * spread,
          12,
          88
        );

        const top = clamp(
          50 + randomNormal() * spread,
          10,
          90
        );

        let valid = true;
        let score = Infinity;

        for (const other of placedSkills) {
          // Approximate distance using a 1100 × 460 cloud.
          const dx = (left - other.left) * 11;
          const dy = (top - other.top) * 4.6;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const sameCategory =
            skill.category === other.category;

          // Same-category logos need more breathing room.
          const minimumDistance = sameCategory
            ? Math.max(95, (skill.size + other.size) / 2 + 25)
            : 48;

          if (distance < minimumDistance) {
            valid = false;
            break;
          }

          score = Math.min(score, distance);
        }

        if (valid) {
          bestPosition = { left, top };
          break;
        }

        // Remember the least crowded candidate as a fallback.
        if (score > bestScore) {
          bestScore = score;
          bestPosition = { left, top };
        }
      }

      savedPositions[skill.name] = {
        left: `${bestPosition.left}%`,
        top: `${bestPosition.top}%`,
      };

      placedSkills.push({
        ...skill,
        left: bestPosition.left,
        top: bestPosition.top,
      });
    });

    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify(savedPositions)
      );
    } catch {
      // Keep the generated positions for this page session.
    }
  }

  return skills.map((skill) => ({
    ...skill,
    position: savedPositions[skill.name],
  }));
});

  // Project navigation
  const nextProject = () => {
    setProjectIndex((current) => (current + 1) % projects.length);
  };

  const previousProject = () => {
    setProjectIndex(
      (current) => (current - 1 + projects.length) % projects.length
    );
  };

  const orderedProjects = projects.map(
    (_, index) => projects[(projectIndex + index) % projects.length]
  );

  // Certificate navigation
  const nextCertificate = () => {
    setActiveCertificate(
      (current) => (current + 1) % certificates.length
    );
  };

  // Scroll-linked animation for journey timeline circles
useEffect(() => {
  const updateJourneyProgress = () => {
    const markers = document.querySelectorAll(".journey-marker");

    markers.forEach((marker) => {
      const rect = marker.getBoundingClientRect();

      // Start filling as the circle approaches the lower-middle
      // portion of the viewport.
      const start = window.innerHeight * 0.75;
      const end = window.innerHeight * 0.45;

      const progress = Math.min(
        1,
        Math.max(0, (start - rect.top) / (start - end))
      );

      marker.style.setProperty(
        "--fill-progress",
        progress
      );
    });
  };

  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateJourneyProgress();
        ticking = false;
      });

      ticking = true;
    }
  };

  updateJourneyProgress();

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  window.addEventListener("resize", updateJourneyProgress);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", updateJourneyProgress);
  };
}, []);

return (
  <div className={dark ? "app dark" : "app"}>
    <StarBackground />
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="logo">
          Julia<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#journey">Journey</a>
          <a href="#projects">Projects</a>
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

      {/* HOME */}
      <section className="hero section-container" id="home">
        <div className="hero-content">
          <h1>
            Hi, I'm <span>Julia!</span>
          </h1>

          <p className="hero-description">
            <TypingRole />
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              View My Works <ArrowRight size={16} />
            </a>

            <a
              href="/julia_resume.pdf"
              download
              className="button outline"
            >
              Download CV <ArrowDownToLine size={16} />
            </a>
          </div>
        </div>

        {/* <div className="hero-image">
          <img src="/me_photo.png" alt="Portrait of Julia" />
        </div> */}
      </section>

      {/* ABOUT + CERTIFICATIONS */}
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-content">
            <h2>
              A Little About <span>Me.</span>
            </h2>

            <div className="about-intro-grid">
              <div className="about-tag-group">
                <h3>I am...</h3>

                <div className="about-tag-list">
                  {[
                    "An INFP",
                    "Creative",
                    "Curious-minded",
                    "Imaginative",
                    "Detail-oriented",
                    "A learner",
                    "Adaptable",
                    "A problem-solver",
                    "A team player",
                  ].map((item) => (
                    <span className="about-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="about-tag-group">
                <h3>I enjoy...</h3>

                <div className="about-tag-list">
                  {[
                    "Making art",
                    "Digital illustration",
                    "Crafting",
                    "Coding",
                    "Creative projects",
                    "Exploring new things",
                    "Learning",
                    "Gaming",
                    "Reading",
                    "Movies & Series",
                  ].map((item) => (
                    <span className="about-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="certificate-area">
            <div className="certificate-heading"></div>

            <div className="certificate-stack">
              {certificates.map((certificate, index) => {
                const position =
                  (index - activeCertificate + certificates.length) %
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

      {/* TECHNICAL PROFICIENCY */}
      <section className="tech-section" id="tech-stack">
        <div className="tech-container">
          <div className="tech-heading">
           
            <h2>
              Technical <span>Proficiency.</span>
            </h2>
          </div>

{/* CATEGORY FILTERS */}
<div className="skill-categories">
  {skillCategories.map((category) => (
    <button
      key={category}
      className={`skill-category-button ${
        activeSkillCategory === category ? "active" : ""
      }`}
      onClick={() =>
        setActiveSkillCategory((current) =>
          current === category ? null : category
        )
      }
    >
      {category}
    </button>
  ))}
</div>

{/* RANDOMIZED, ORGANIC LOGO CLOUD */}
<div className="skills-cloud">
  {randomizedSkills.map((skill) => {
    const isHighlighted =
      activeSkillCategory === null ||
      activeSkillCategory === skill.category;

    return (
      <div
        className={`floating-skill ${
          isHighlighted ? "highlighted" : "muted"
        }`}
        key={skill.name}
        style={{
          "--skill-color": skill.color,
          "--skill-size": `${skill.size}px`,
          left: skill.position.left,
          top: skill.position.top,
        }}
        title={skill.name}
      >
        <div className="floating-skill-icon">
          {skill.icon}
        </div>

        <span className="skill-tooltip">
          {skill.name}
        </span>
      </div>
    );
  })}
</div>

  
        </div>
      </section>

      {/* MY JOURNEY */}
      <section className="journey-section" id="journey">
        <div className="journey-container">
          <div className="journey-heading">
            
            <h2>
              Experiences, Education,
              <br />
              and <span>Affiliations</span>
            </h2>
{/* 
            <p>
              A look at the experiences, milestones, and communities
              that have shaped my journey.
            </p> */}

            <div className="journey-heading-line"></div>
          </div>

          <div className="journey-timeline">
            <div className="journey-line"></div>

            {journeyItems.map((item, index) => {
              const JourneyIcon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <article
                  className={`journey-item ${
                    isLeft ? "journey-left" : "journey-right"
                  }`}
                  key={`${item.organization}-${item.title}`}
                >
                  <div className="journey-card">
                    {/* <span className="journey-category">
                      <JourneyIcon size={18} />
                      {item.category}
                    </span> */}

                    <h3>{item.title}</h3>

                    <h4>{item.organization}</h4>

                    <span className="journey-date">
                      {item.date}
                    </span>

                    <div className="journey-hover-details">
                      <ul>
                        {item.highlights.slice(0, 2).map(
                          (highlight, highlightIndex) => (
                            <li key={highlightIndex}>
                              {highlight}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="journey-marker">
                    <JourneyIcon size={25} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="projects section-container" id="projects">
        <div className="projects-heading">
          <h2>Featured Projects</h2>
          <p>
            Explore some of the projects I've worked on and the ideas
            I've brought to life.
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
                if (event.key === "Enter" || event.key === " ") {
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
          <button
            onClick={previousProject}
            aria-label="Previous projects"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextProject}
            aria-label="Next projects"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact section-container" id="contact">
        <div className="contact-content">
          
          <h2>
            Let's Build Something <br />
            Amazing <span>Together</span>
          </h2>

          <p>
            Have an idea in mind? Let's make something
            thoughtful, useful, and a little delightful.
          </p>

          <a
            href="/julia_resume.pdf"
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
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            
          >
            <FaFacebook />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer section-container">
        <a href="#home" className="logo">
          Julia<span>.</span>
        </a>

        <p>
          © {new Date().getFullYear()} Julia. Made with love.
        </p>
      </footer>

      {/* PROJECT DETAILS POPUP */}
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
