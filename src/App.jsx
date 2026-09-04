import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaArrowRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiPytorch,
  SiOpencv,
  SiLeetcode,
} from "react-icons/si";

import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Python", icon: <FaPython /> },
    { name: "C", icon: <FaCode /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "PyTorch", icon: <SiPytorch /> },
    { name: "OpenCV", icon: <SiOpencv /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  const projects = [
    {
      title: "Drone Detection System",
      emoji: "🚁",
      description:
        "An AI-powered computer vision system designed to detect drones and aerial objects using YOLO and OpenCV.",
      tech: ["Python", "YOLO", "PyTorch", "OpenCV"],
      github: "#",
      live: "#",
    },
    {
      title: "TechnOS",
      emoji: "💻",
      description:
        "A graphical terminal emulator built using C++ with features like file operations, command history, tab completion, scrolling, and directory navigation.",
      tech: ["C++", "Raylib", "Git"],
      github: "#",
      live: "#",
    },
    {
      title: "Coming Soon",
      emoji: "🚀",
      description:
        "More exciting projects are currently in development. Stay tuned!",
      tech: ["React", "AI", "Development"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <div className="App">

      {/* BACKGROUND */}
      <div className="background">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
        <div className="grid"></div>
      </div>

      {/* NAVBAR */}

      <nav className="navbar">

        <a href="#home" className="logo">
          Nimisha<span>.</span>
        </a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </nav>


      {/* HERO SECTION */}

      <section id="home" className="hero">

        <motion.div
          className="hero-content"

          initial={{ opacity: 0, y: 40 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}
        >

          <p className="hero-small">
            👋 Hello, I'm
          </p>

          <h1>
            Nimisha
            <span> Singhal</span>
          </h1>

          <h2>
            Electrical Engineer ⚡
            <br />
            <span>Developer & AI Enthusiast</span>
          </h2>

          <p className="hero-description">
            I'm passionate about building impactful projects,
            exploring Artificial Intelligence, Machine Learning,
            Computer Vision and Software Development.
          </p>


          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              View Projects
              <FaArrowRight />
            </a>

            <a
              href="https://github.com/nimisha1029"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              <FaGithub />
              GitHub
            </a>

          </div>


          {/* SOCIAL LINKS */}

          <div className="social-icons">

            <a
              href="https://github.com/nimisha1029"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            {/* ADD LINKEDIN LINK */}

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            {/* ADD LEETCODE LINK */}

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <SiLeetcode />
            </a>

            {/* ADD EMAIL */}

            <a href="mailto:YOUR_EMAIL@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </motion.div>


        {/* HERO CARD */}

        <motion.div
          className="hero-card"

          initial={{ opacity: 0, scale: 0.8 }}

          animate={{ opacity: 1, scale: 1 }}

          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        >

          <div className="terminal">

            <div className="terminal-header">

              <div className="terminal-dots">

                <span></span>
                <span></span>
                <span></span>

              </div>

              <p>nimisha@portfolio</p>

            </div>


            <div className="terminal-body">

              <p>
                <span className="purple">
                  nimisha@portfolio
                </span>
                :
                <span className="blue">
                  ~
                </span>
                $
              </p>

              <p className="command">
                whoami
              </p>

              <p>
                B.Tech Electrical Engineering Student
              </p>

              <p>
                Developer & AI Enthusiast
              </p>

              <br />

              <p>
                <span className="purple">
                  nimisha@portfolio
                </span>
                :
                <span className="blue">
                  ~
                </span>
                $
              </p>

              <p className="command">
                interests
              </p>

              <p>
                • Software Development
              </p>

              <p>
                • Machine Learning
              </p>

              <p>
                • Computer Vision
              </p>

              <p>
                • Problem Solving
              </p>

              <br />

              <p className="cursor">
                _
              </p>

            </div>

          </div>

        </motion.div>

      </section>


      {/* ABOUT SECTION */}

      <section id="about" className="section">

        <motion.div
          className="section-header"

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

        >

          <p className="section-tag">
            ABOUT ME
          </p>

          <h2>
            Turning Ideas Into
            <span> Reality.</span>
          </h2>

        </motion.div>


        <div className="about-container">

          <motion.div
            className="about-card"

            initial={{ opacity: 0, x: -40 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true }}
          >

            <h3>
              👩‍💻 Who Am I?
            </h3>

            <p>
              I'm Nimisha Singhal, a B.Tech Electrical Engineering
              student with a strong interest in technology,
              software development and Artificial Intelligence.
            </p>

            <p>
              I enjoy learning by building projects and exploring
              new technologies. Currently, I'm focusing on
              Machine Learning, Computer Vision and Data Structures
              & Algorithms.
            </p>

          </motion.div>


          <motion.div
            className="stats"

            initial={{ opacity: 0, x: 40 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true }}
          >

            <div className="stat-card">

              <h3>🚀</h3>

              <h2>Projects</h2>

              <p>
                Building and experimenting
              </p>

            </div>


            <div className="stat-card">

              <h3>🧠</h3>

              <h2>AI & ML</h2>

              <p>
                Currently exploring
              </p>

            </div>


            <div className="stat-card">

              <h3>💻</h3>

              <h2>DSA</h2>

              <p>
                Problem solving journey
              </p>

            </div>


            <div className="stat-card">

              <h3>🌱</h3>

              <h2>Learning</h2>

              <p>
                Every single day
              </p>

            </div>

          </motion.div>

        </div>

      </section>


      {/* SKILLS SECTION */}

      <section id="skills" className="section skills-section">

        <motion.div
          className="section-header"

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}
        >

          <p className="section-tag">
            TECH STACK
          </p>

          <h2>
            Tools I
            <span> Work With.</span>
          </h2>

        </motion.div>


        <div className="skills-grid">

          {skills.map((skill, index) => (

            <motion.div
              className="skill-card"

              key={index}

              initial={{
                opacity: 0,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{ once: true }}

              transition={{
                delay: index * 0.05,
              }}

              whileHover={{
                y: -8,
              }}
            >

              <div className="skill-icon">
                {skill.icon}
              </div>

              <p>
                {skill.name}
              </p>

            </motion.div>

          ))}

        </div>

      </section>


      {/* PROJECTS */}

      <section id="projects" className="section">

        <motion.div
          className="section-header"

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}
        >

          <p className="section-tag">
            MY WORK
          </p>

          <h2>
            Featured
            <span> Projects.</span>
          </h2>

        </motion.div>


        <div className="projects-grid">

          {projects.map((project, index) => (

            <motion.div
              className="project-card"

              key={index}

              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{ once: true }}

              whileHover={{
                y: -10,
              }}
            >

              <div className="project-image">

                <div className="project-emoji">

                  {project.emoji}

                </div>

              </div>


              <div className="project-content">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>


                <div className="project-tech">

                  {project.tech.map((tech, index) => (

                    <span key={index}>
                      {tech}
                    </span>

                  ))}

                </div>


                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >

                    <FaGithub />

                    Code

                  </a>


                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >

                    Live Demo

                    <FaArrowRight />

                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>


      {/* CURRENTLY LEARNING */}

      <section className="section learning-section">

        <div className="learning-container">

          <motion.div

            initial={{ opacity: 0, x: -40 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true }}
          >

            <p className="section-tag">
              CURRENTLY LEARNING
            </p>

            <h2>
              Always
              <span> Exploring.</span>
            </h2>

            <p className="learning-description">

              Technology evolves every day, and so do I.
              Currently focusing on building strong foundations
              in AI, Machine Learning and Software Development.

            </p>

          </motion.div>


          <motion.div
            className="learning-list"

            initial={{ opacity: 0, x: 40 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true }}
          >

            <div>
              🤖 Machine Learning
            </div>

            <div>
              👁️ Computer Vision
            </div>

            <div>
              🔥 PyTorch & Deep Learning
            </div>

            <div>
              💻 Data Structures & Algorithms
            </div>

            <div>
              🚀 Software Development
            </div>

          </motion.div>

        </div>

      </section>


      {/* CONTACT */}

      <section id="contact" className="section contact-section">

        <motion.div
          className="contact-box"

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{ once: true }}
        >

          <p className="section-tag">
            CONTACT
          </p>

          <h2>
            Let's Build Something
            <span> Amazing.</span>
          </h2>

          <p>

            Have a project, idea or opportunity?
            I'd love to connect!

          </p>


          <a
            href="mailto:YOUR_EMAIL@gmail.com"
            className="primary-button"
          >

            <FaEnvelope />

            Say Hello

          </a>


          <div className="contact-socials">

            <a
              href="https://github.com/nimisha1029"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>


            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>


            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <SiLeetcode />
            </a>

          </div>

        </motion.div>

      </section>


      {/* FOOTER */}

      <footer>

        <p>
          © {new Date().getFullYear()}
          {" "}
          Nimisha Singhal.
          Built with React ⚛️
        </p>

      </footer>

    </div>
  );
}

export default App;