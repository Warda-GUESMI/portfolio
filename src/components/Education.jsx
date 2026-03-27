export default function Education() {
  const education = [
    {
      period: '09/2024 — présent',
      degree: 'Génie Informatique',
      school: 'ENICarthage — École Nationale d\'Ingénieurs de Carthage',
      icon: '🎓',
      active: true,
    },
    {
      period: '08/2022 — 06/2024',
      degree: 'Cycle Préparatoire Physique-Chimie',
      school: 'IPEIS — Institut Préparatoire aux Études d\'Ingénieurs de Sfax',
      icon: '📚',
      active: false,
    },
  ]

  const experience = [
    {
      period: '2024',
      role: 'Stage d\'observation',
      company: 'ATS Informatique',
      desc: 'Développement logiciel, maintenance d\'applications, assistance systèmes et sécurité.',
      icon: '💼',
    },
    {
      period: '2023–2024',
      role: 'Formation',
      company: 'EDUSPAZIO',
      desc: 'Python, SQL, SQLite — développement de compétences en programmation et bases de données.',
      icon: '🏫',
    },
  ]

  return (
    <section id="education">
      <div className="container">
        <p className="section-label">Parcours</p>
        <h2 className="section-title">Formation & <span>Expérience</span></h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          {/* Education */}
          <div>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', color: 'var(--cyan)', marginBottom: '2rem', letterSpacing: '0.1em' }}>
              FORMATION ACADÉMIQUE
            </h3>
            <div style={{ position: 'relative', paddingLeft: '2rem' }}>
              {/* timeline line */}
              <div style={{
                position: 'absolute', left: 0, top: '12px', bottom: '12px',
                width: '1px', background: 'linear-gradient(180deg, var(--cyan), var(--violet))',
              }} />

              {education.map((e, i) => (
                <div key={i} style={{ position: 'relative', marginBottom: '2.5rem' }}>
                  {/* dot */}
                  <div style={{
                    position: 'absolute', left: '-2rem', top: '4px',
                    width: '10px', height: '10px',
                    background: e.active ? 'var(--cyan)' : 'var(--border)',
                    borderRadius: '50%',
                    boxShadow: e.active ? 'var(--glow)' : 'none',
                    border: '2px solid var(--bg)',
                    transform: 'translateX(-4px)',
                  }} />
                  <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em', marginBottom: '0.3rem' }}>
                    {e.period}
                  </p>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', marginBottom: '0.2rem' }}>
                    {e.degree}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>{e.school}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', color: 'var(--violet)', marginBottom: '2rem', letterSpacing: '0.1em' }}>
              EXPÉRIENCE
            </h3>
            <div style={{ position: 'relative', paddingLeft: '2rem' }}>
              <div style={{
                position: 'absolute', left: 0, top: '12px', bottom: '12px',
                width: '1px', background: 'linear-gradient(180deg, var(--violet), transparent)',
              }} />

              {experience.map((e, i) => (
                <div key={i} style={{ position: 'relative', marginBottom: '2.5rem' }}>
                  <div style={{
                    position: 'absolute', left: '-2rem', top: '4px',
                    width: '10px', height: '10px',
                    background: 'var(--violet)',
                    borderRadius: '50%',
                    border: '2px solid var(--bg)',
                    transform: 'translateX(-4px)',
                  }} />
                  <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em', marginBottom: '0.3rem' }}>
                    {e.period}
                  </p>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', marginBottom: '0.1rem' }}>
                    {e.role}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--violet)', marginBottom: '0.4rem' }}>{e.company}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #education .container > div[style] { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}
