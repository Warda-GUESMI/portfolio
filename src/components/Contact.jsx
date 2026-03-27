export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label" style={{ textAlign: 'center' }}>Contact</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Travaillons <span>ensemble</span>
          </h2>

          <p style={{
            color: 'var(--text-dim)', maxWidth: '480px',
            margin: '0 auto 3rem', lineHeight: 1.8, fontSize: '0.9rem',
          }}>
            Ouverte aux opportunités de stage, projets collaboratifs et échanges autour de l'IA et de la Data Science.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href="mailto:warda.guesmi@enicar.ucar.tn" style={{
              padding: '0.9rem 2.5rem',
              background: 'var(--cyan)',
              color: 'var(--bg)',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '0.85rem',
              textDecoration: 'none',
              borderRadius: '6px',
              letterSpacing: '0.05em',
              transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => e.target.style.opacity = '0.85'}
              onMouseLeave={e => e.target.style.opacity = '1'}
            >
              📩 M'envoyer un email
            </a>
            <a href="https://linkedin.com/in/wardaguesmi" target="_blank" rel="noreferrer" style={{
              padding: '0.9rem 2.5rem',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 600,
              fontSize: '0.85rem',
              textDecoration: 'none',
              borderRadius: '6px',
              letterSpacing: '0.05em',
              transition: 'border-color 0.2s, color 0.2s',
            }}
              onMouseEnter={e => { e.target.style.borderColor = 'var(--cyan)'; e.target.style.color = 'var(--cyan)' }}
              onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text)' }}
            >
              LinkedIn →
            </a>
          </div>

          {/* Info cards */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Email', value: 'warda.guesmi@enicar.ucar.tn', href: 'mailto:warda.guesmi@enicar.ucar.tn' },
              { label: 'Téléphone', value: '+216 25 438 371', href: 'tel:+21625438371' },
              { label: 'Localisation', value: 'Soukra, Ariana, Tunisie', href: '#' },
            ].map((item, i) => (
              <a key={i} href={item.href} style={{
                padding: '1rem 1.5rem',
                background: 'var(--bg2)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                textDecoration: 'none',
                minWidth: '200px',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--cyan)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em', marginBottom: '0.3rem' }}>
                  {item.label.toUpperCase()}
                </p>
                <p style={{ fontSize: '0.82rem', color: 'var(--cyan)', fontFamily: 'DM Mono, monospace' }}>
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '2rem 0',
        textAlign: 'center',
        position: 'relative', zIndex: 1,
      }}>
        <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'DM Mono, monospace' }}>
          Conçu & développé par{' '}
          <span style={{ color: 'var(--cyan)' }}>Warda Guesmi</span>
          {' '}— 2026
        </p>
      </footer>
    </>
  )
}
