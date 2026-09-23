import Gallery from './components/Gallery';

export default function App() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f9',
      color: '#333',
      margin: 0,
    },
    header: {
      backgroundColor: '#1f2937',
      color: '#ffffff',
      padding: '20px',
      textAlign: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    main: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    },
    footer: {
      backgroundColor: '#1f2937',
      color: '#ffffff',
      textAlign: 'center',
      padding: '20px',
      marginTop: 'auto',
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '10px',
    },
    link: {
      color: '#60a5fa',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    copyright: {
      margin: 0,
      fontSize: '0.9rem',
      color: '#9ca3af',
    }
  };

  return (
    <div style={styles.container}>
      {/* Cabeçalho */}
      <header style={styles.header}>
        <h1 style={{ margin: 0, fontSize: '1.8rem' }}>Desenvolvimento de Aplicações Orientadas a Componentes</h1>
        <p style={{ margin: '5px 0 0 0', opacity: 0.8 }}>Galeria em React</p>
      </header>

      {/* Galeria */}
      <main style={styles.main}>
        <Gallery />
      </main>

      {/* Rodapé com Links e Assinatura */}
      <footer style={styles.footer}>
        <p style={styles.copyright}>
          Copyright © {new Date().getFullYear()} Ulisses "Kakarato" Guimarães
        </p>
        
        <div style={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/ulisses-guimaraes-/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            LinkedIn
          </a>
          <span>|</span>
          <a
            href="https://github.com/uliguimaraes"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

