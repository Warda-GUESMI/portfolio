const certs = [
  { title: 'Introduction to Docker', issuer: 'DataCamp', date: '2025', icon: '🐳', color: '#0db7ed' },
  { title: 'Unsupervised Learning in Python', issuer: 'DataCamp', date: 'Févr. 2026', icon: '🤖', color: '#03ef62' },
  { title: 'Artificial Intelligence Fundamentals', issuer: 'IBM', date: 'Févr. 2026', icon: '🧠', color: '#1f70c1' },
  { title: 'Data Fundamentals — IBM SkillsBuild', issuer: 'IBM', date: 'Févr. 2026', icon: '📊', color: '#1f70c1' },
  { title: 'Machine Learning', issuer: 'Kaggle', date: 'Févr. 2026', icon: '🐍', color: '#20beff', note: 'Python' },
  { title: 'CCNA 1 — Introduction aux Réseaux', issuer: 'Cisco', date: 'Mai 2025', icon: '🌐', color: '#1ba0d7', note: 'Routage & Commutation' },
]

export default function Certifications() {
  return (
    <section id="certifications" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <p className="section-label">Licences</p>
        <h2 className="section-title">Certifications <span>&</span> Formations</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          {certs.map((c, i) => (
            <div key={i} className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px',
                background: `${c.color}20`,
                border: `1px solid ${c.color}44`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.3rem', flexShrink: 0,
              }}>
                {c.icon}
              </div>
              <div>
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                  {c.title}
                </p>
                <p style={{ fontSize: '0.72rem', color: c.color, marginBottom: '0.1rem' }}>{c.issuer}</p>
                <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                  {c.date}
                  {c.note && <span style={{ color: 'var(--text-dim)', marginLeft: '0.5rem' }}>· {c.note}</span>}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
