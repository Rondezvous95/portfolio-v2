import { motion } from 'framer-motion';

const experience = [
  {
    role: 'Product Trainer',
    company: 'Accenture @ Meta',
    period: '2021 — Present',
    description:
      'Redesigned onboarding programmes reducing time-to-productivity by 73% while training 200+ analysts across APAC and EMEA.'
  },
  {
    role: 'Operations Team Lead',
    company: 'Accenture @ Meta',
    period: '2023 — 2024',
    description:
      'Managed workforce operations, SLA governance, and stakeholder reporting for a regional support organisation.'
  }
];

export default function App() {
  return (
    <main className="container">
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">Learning & Enablement</p>
          <h1>Ron Liang</h1>
          <p className="intro">
            Learning & Enablement professional specialising in onboarding,
            operational excellence, stakeholder management, and scalable
            training systems.
          </p>

          <div className="links">
            <a href="mailto:liangron95@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/ronliang/" target="_blank">LinkedIn</a>
            <a href="https://github.com/Rondezvous95" target="_blank">GitHub</a>
          </div>
        </motion.div>
      </section>

      <section className="section">
        <h2>About</h2>
        <p>
          Currently supporting Meta operations through Accenture, leading
          onboarding transformation, learning enablement, and operational
          readiness programmes across Singapore, Dublin, Hyderabad, and
          Bangkok.
        </p>
      </section>

      <section className="section">
        <h2>Experience</h2>

        <div className="experience-grid">
          {experience.map((item) => (
            <motion.div
              className="card"
              key={item.role}
              whileHover={{ y: -4 }}
            >
              <div className="card-top">
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <span>{item.period}</span>
              </div>

              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
