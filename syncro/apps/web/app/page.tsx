import styles from "./page.module.css";

const features = [
  {
    title: "Tablero Kanban",
    desc: "Arrastra y suelta tareas en columnas personalizables. Visualiza el flujo de trabajo de tu equipo en tiempo real.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="4" rx="1.5" />
        <rect x="14" y="10" width="7" height="11" rx="1.5" />
        <rect x="3" y="13" width="7" height="8" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "Calendarios Dinámicos",
    desc: "Sincroniza fechas límite, hitos y sprints en una vista de calendario compartida y actualizada al instante.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="12" y1="14" x2="12" y2="18" />
        <line x1="10" y1="16" x2="14" y2="16" />
      </svg>
    ),
  },
  {
    title: "Notificaciones en Vivo",
    desc: "Los cambios de estado se reflejan al instante en todos los dispositivos. Sin recargas, sin latencia.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        <circle cx="19" cy="4" r="2" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>Syncro</div>
        <nav className={styles.nav}>
          <a href="#features">Características</a>
          <a href="#contact" className={styles.navCta}>Contacto</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Gestiona tu equipo en{" "}
            <span className={styles.gradientText}>sincronía</span>
          </h1>
          <p className={styles.heroSub}>
            Una plataforma ágil de proyectos con tablero Kanban colaborativo,
            calendarios dinámicos y notificaciones en tiempo real. Todo
            sincronizado al instante.
          </p>
          <div className={styles.heroCtas}>
            <a href="#" className={styles.btnPrimary}>Comenzar gratis</a>
            <a href="#" className={styles.btnSecondary}>Ver demo</a>
          </div>
        </div>
      </section>

      <section id="features" className={styles.features}>
        <h2 className={styles.sectionTitle}>
          Todo lo que tu equipo necesita
        </h2>
        <p className={styles.sectionSub}>
          Cada cambio se refleja sin latencia en las pantallas de todos los
          usuarios.
        </p>
        <div className={styles.featuresGrid}>
          {features.map((f) => (
            <article key={f.title} className={styles.featureCard}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Syncro. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
