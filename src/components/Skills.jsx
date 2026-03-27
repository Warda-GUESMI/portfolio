const skillGroups = [
  {
    title: 'Langages & Frameworks',
    color: '#00d4ff',
    skills: ['Python', 'Java', 'C / C++', 'JavaScript', 'TypeScript', 'Spring Boot', 'Angular', 'Node.js', 'Express.js'],
  },
  {
    title: 'Bases de Données & Outils',
    color: '#7c3aed',
    skills: ['SQL', 'PL/SQL', 'SQLite', 'MongoDB', 'MySQL', 'Git', 'GitHub', 'Docker', 'Linux', 'Postman', 'MATLAB'],
  },
  {
    title: 'Concepts & Méthodes',
    color: '#10b981',
    skills: ['POO', 'UML', 'REST API', 'MVC', 'Agile', 'Conteneurisation', 'Travail d\'équipe'],
  },
  {
    title: 'Langues',
    color: '#f59e0b',
    skills: ['Français — Courant', 'Anglais — Courant', 'Italien — Notions'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">Compétences</p>
        <h2 className="section-title">Stack & <span>Savoir-faire</span></h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {skillGroups.map((group, i) => (
            <div key={i} className="card">
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem',
              }}>
                <div style={{ width: '8px', height: '8px', background: group.color, borderRadius: '50%', boxShadow: `0 0 8px ${group.color}` }} />
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em' }}>
                  {group.title}
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.skills.map((skill, j) => (
                  <span key={j} style={{
                    fontSize: '0.72rem',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '99px',
                    background: `${group.color}15`,
                    border: `1px solid ${group.color}44`,
                    color: group.color,
                    fontFamily: 'DM Mono, monospace',
                    whiteSpace: 'nowrap',
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
