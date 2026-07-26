import { useEffect, useState } from 'react'
import './App.css'
import { about, certifications, education, experience, profile, skillGroups } from './data'

const flatSkills = skillGroups.flatMap((group) => group.items)
const defaultSkill = flatSkills[0]
const metrics = [
  { value: '4+', label: 'Professional experiences' },
  { value: '14+', label: 'Verified certifications' },
  { value: '10+', label: 'Strengths & capabilities' },
]

function App() {
  const [selectedSkillLabel, setSelectedSkillLabel] = useState(defaultSkill.label)
  const [skillsActive, setSkillsActive] = useState(false)
  const [animatedPercents, setAnimatedPercents] = useState<Record<string, number>>({})

  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll('.reveal'))
    const navLinks = Array.from(document.querySelectorAll('.nav-links a'))
    const overlay = document.querySelector('.transition-overlay')
    const skillsSection = document.querySelector('#skills')
    let transitionTimer: number | undefined
    const countTimers: number[] = []

    if (!reveals.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    reveals.forEach((element) => observer.observe(element))

    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsActive(true)
            flatSkills.forEach((item) => {
              let current = 0
              const step = Math.max(1, Math.ceil(item.value / 35))
              const timer = window.setInterval(() => {
                current += step
                if (current >= item.value) {
                  current = item.value
                  window.clearInterval(timer)
                }
                setAnimatedPercents((state) => ({ ...state, [item.label]: current }))
              }, 20)
              countTimers.push(timer)
            })
            if (skillsSection) {
              skillObserver.unobserve(skillsSection)
            }
          }
        })
      },
      { threshold: 0.35, rootMargin: '-60px' }
    )

    if (skillsSection) {
      skillObserver.observe(skillsSection)
    }

    const handlers = navLinks.map((link) => {
      const onClick = (event: Event) => {
        const anchor = link as HTMLAnchorElement
        const href = anchor.getAttribute('href')
        const targetId = href?.replace('#', '')
        const overlayElement = overlay as HTMLElement | null

        if (!href?.startsWith('#') || !targetId || !overlayElement) {
          return
        }

        event.preventDefault()
        overlayElement.classList.remove('active')
        void overlayElement.offsetWidth
        overlayElement.classList.add('active')

        if (transitionTimer) {
          window.clearTimeout(transitionTimer)
        }

        transitionTimer = window.setTimeout(() => {
          const target = document.getElementById(targetId)
          target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          overlayElement.classList.remove('active')
        }, 700)
      }

      link.addEventListener('click', onClick as EventListener)
      return onClick as EventListener
    })

    return () => {
      handlers.forEach((handler, index) => navLinks[index]?.removeEventListener('click', handler))
      observer.disconnect()
      skillObserver.disconnect()
      if (transitionTimer) {
        window.clearTimeout(transitionTimer)
      }
      countTimers.forEach((timer) => window.clearInterval(timer))
    }
  }, [])

  const selectedSkill = flatSkills.find((item) => item.label === selectedSkillLabel) ?? defaultSkill

  return (
    <div className="app-shell">
      <div className="transition-overlay" aria-hidden="true" />
      <header className="hero-section" id="home">
        <nav className="top-nav">
          <div className="nav-brand reveal">{profile.name}</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#certifications">Certifications</a>
            <a href="#education">Education</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{profile.role}</p>
            <h1>{profile.headline}</h1>
            <p className="hero-description">
              I build people-first workplaces by combining HR operations, talent engagement, and process clarity. My work is designed to create employee experiences that feel organized, empathetic, and growth-focused.
            </p>
            <div className="hero-actions">
              <a href={profile.resumeUrl} className="btn btn-primary">
                View Resume
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
            <div className="hero-meta-grid">
              <div className="hero-meta-card">
                <strong>{profile.location}</strong>
                <span>Based in</span>
              </div>
              <div className="hero-meta-card">
                <strong>{certifications.length} credentials</strong>
                <span>Verified achievements</span>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="hero-portrait-frame">
              <div className="hero-portrait-wrap">
                <div className="portrait-glow" />
                <img src={profile.photoUrl} alt={profile.name} className="portrait" />
              </div>
            </div>
          </div>
        </div>

        <div className="metrics-strip reveal">
          {metrics.map((metric) => (
            <div key={metric.label} className="metric-card">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </header>

      <main>
        <section id="about" className="section-card about-section reveal">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Real HR experience shaped by empathy, structure, and meaningful team support.</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p>{about.summary}</p>
              <div className="about-points">
                <div className="about-pill-card">
                  <span className="about-point-title">Operations-first</span>
                  <p>Clear processes and consistent follow-up make HR work feel reliable for everyone.</p>
                </div>
                <div className="about-pill-card">
                  <span className="about-point-title">People-centered</span>
                  <p>Every decision is guided by how it affects employee trust, communication, and culture.</p>
                </div>
              </div>
            </div>
            <div className="about-pill-list">
              {about.highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-card reveal">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Structured experience delivering HR and people operations work in real teams.</h2>
          </div>
          <div className="timeline">
            {experience.map((item, index) => (
              <article key={item.title} className="timeline-card reveal" style={{ animationDelay: `${index * 120}ms` }}>
                <div className="timeline-header">
                  <div>
                    <h3>{item.title}</h3>
                    <h4>{item.company}</h4>
                  </div>
                  <span>{item.period}</span>
                </div>
                <p className="timeline-location">{item.location}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-card reveal">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Click a skill to reveal the practical strengths behind it.</h2>
          </div>
          <div className={`skill-shell ${skillsActive ? 'active' : ''}`}>
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-card">
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.items.map((item) => (
                    <div key={item.label} className="skill-row">
                      <div className="skill-label-row">
                        <span>{item.label}</span>
                        <span>{animatedPercents[item.label] ?? 0}%</span>
                      </div>
                      <div className="progress-track">
                        <div className="progress-fill" style={{ width: skillsActive ? `${item.value}%` : '0%' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="skill-action-row">
            <div className="skill-chip-grid">
              {flatSkills.map((skill, index) => (
                <button
                  key={skill.label}
                  type="button"
                  className={`skill-chip reveal ${selectedSkillLabel === skill.label ? 'selected' : ''}`}
                  style={{ animationDelay: `${index * 60}ms` }}
                  onClick={() => setSelectedSkillLabel(skill.label)}
                >
                  {skill.label}
                </button>
              ))}
            </div>
            <div className="skill-detail-card reveal" style={{ animationDelay: '0ms' }}>
              <span>Selected skill</span>
              <h3>{selectedSkill.label}</h3>
              <p>{selectedSkill.description}</p>
              <div className="skill-detail-footnote">
                Proficiency: <strong>{skillsActive ? `${animatedPercents[selectedSkill.label] ?? 0}%` : '0%'}</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" className="section-card reveal">
          <div className="section-heading">
            <p className="eyebrow">Certifications</p>
            <h2>Verified credentials that reinforce HR, people, and business skills.</h2>
          </div>
          <div className="card-grid">
            {certifications.map((cert, index) => (
              <article key={cert.title} className="info-card reveal certification-card" style={{ animationDelay: `${index * 100}ms` }}>
                {cert.image ? <img src={cert.image} alt={cert.title} className="cert-image" /> : null}
                <div className="cert-body">
                  <div className="card-badge">Certified</div>
                  <h3>{cert.title}</h3>
                  <p className="card-subtitle">{cert.issuer}</p>
                  <span>{cert.date}</span>
                  <p className="cert-detail">{cert.details}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section-card reveal">
          <div className="section-heading">
            <p className="eyebrow">Education</p>
            <h2>Academic foundations that support HR, reporting, and workplace thinking.</h2>
          </div>
          <div className="card-grid">
            {education.map((item, index) => (
              <article key={item.degree} className="education-card reveal" style={{ animationDelay: `${index * 120}ms` }}>
                <div className="card-top-row">
                  <h3>{item.degree}</h3>
                  <span>{item.period}</span>
                </div>
                <p className="card-subtitle">{item.institution}</p>
                <p className="card-description">{item.details}</p>
                <ul className="education-highlights">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-card contact-section reveal">
          <div className="section-heading contact-heading">
            <p className="eyebrow">Contact</p>
            <h2>Let’s build better people experiences together.</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-card reveal contact-info-card">
              <div className="contact-card-header">
                <p>Available for HR, talent, and people operations conversations.</p>
              </div>
              <div className="contact-card-body">
                <div className="contact-item">
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">LinkedIn</span>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    linkedin.com/in/omjeepandey929
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Location</span>
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>
            <form className="contact-form reveal contact-form-panel">
              <div className="form-row">
                <label>
                  <span>Your Name</span>
                  <input type="text" placeholder="Enter your name" />
                </label>
                <label>
                  <span>Your Email</span>
                  <input type="email" placeholder="Enter your email" />
                </label>
              </div>
              <label className="full-width">
                <span>Your Message</span>
                <textarea rows={6} placeholder="Tell me about your opportunity" />
              </label>
              <button type="submit" className="btn btn-primary btn-full">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
