const projects = [
  {
    title: 'Simulateur d\'Énergie Solaire',
    desc: 'Application orientée objet simulant la conversion d\'énergie solaire en électricité avec modélisation physique et visualisation des rendements.',
    tags: ['Java', 'UML', 'POO', 'Héritage', 'Interfaces'],
    icon: '☀️',
    color: '#f59e0b',
  },
  {
    title: 'E-Commerce Matériel Informatique',
    desc: 'Plateforme de vente en ligne full-stack pour matériel informatique avec panier, authentification, gestion de commandes et dashboard admin.',
    tags: ['MongoDB', 'Express.js', 'Angular', 'Node.js'],
    icon: '🛒',
    color: '#00d4ff',
  },
  {
    title: 'Gestion PFE (Projets de Fin d\'Études)',
    desc: 'Application web de suivi et gestion des projets de fin d\'études : attribution des encadrants, suivi des avancées, notifications.',
    tags: ['Spring Boot', 'Java', 'REST API', 'MVC'],
    icon: '📋',
    color: '#7c3aed',
  },
  {
    title: 'Serveur Mail ZIMBRA Conteneurisé',
    desc: 'Déploiement et configuration d\'un serveur de messagerie ZIMBRA dans un environnement Docker avec administration système complète.',
    tags: ['Docker', 'Linux', 'Virtualisation', 'Admin Sys'],
    icon: '📬',
    color: '#10b981',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <p className="section-label">Réalisations</p>
        <h2 className="section-title">Mes <span>Projets</span></h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {projects.map((p, i) => (
            <div key={i} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
              {/* color bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '2px',
                background: p.color,
              }} />

              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{p.icon}</div>

              <h3 style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '1.05rem',
                marginBottom: '0.8rem',
                color: 'var(--text)',
              }}>
                {p.title}
              </h3>

              <p style={{
                fontSize: '0.82rem',
                color: 'var(--text-dim)',
                lineHeight: 1.7,
                marginBottom: '1.2rem',
              }}>
                {p.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {p.tags.map((tag, j) => (
                  <span key={j} style={{
                    fontSize: '0.65rem',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    background: 'var(--bg3)',
                    border: '1px solid var(--border)',
                    color: p.color,
                    letterSpacing: '0.05em',
                    fontFamily: 'DM Mono, monospace',
                  }}>
                    {tag}
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
