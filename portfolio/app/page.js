import Link from 'next/link';
import Image from 'next/image';
import styles from './Home.module.css';

const projects = [
  {
    name: 'Jogo da Forca',
    href: '/Forca',
    description: 'Jogo da forca.',
    isExternal: false 
  },
  {
    name: 'Pokebolsa',
    href: 'https://pokebolsa.vercel.app/',
    description: 'Simulador de carteira de investimentos para cartas de Pokémon TCG.',
    isExternal: true 
  }
];

export default function Home() {
  return (
    <main className={styles.container}>
      
      <header className={styles.introSection}>
        <Image 
          className={styles.profileImage} 
          src="/assets/images/perfil.jfif"
          width={150} 
          height={150}
          alt="Foto de perfil de Vinícius Mergulhão"
          priority 
        />
        <h1 className={styles.title}>Olá, me chamo Vinícius Mergulhão!</h1>
        <p className={styles.subtitle}>
          Sou estudante de Ciência da Computação na UNICAP e atualmente estou cursando o 6º período.
          <br />
          Tenho forte interesse nas áreas de Desenvolvimento Backend e Análise de Dados e estou em busca de uma oportunidade de estágio para aplicar meus conhecimentos e crescer profissionalmente.
          <br />
          
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Tecnologias que estou estudando</h2>
        <ul className={styles.techList}>
          <li>Python</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>Selenium</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Projetos</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <Link href={project.href} key={project.name} className={styles.projectCard}>
              <h3>{project.name} &rarr;</h3>
              <p>{project.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Entre em contato:</p>
        <div className={styles.contactLinks}>
          <a href="https://www.linkedin.com/in/viníciusmergulhão" target="_blank" rel="noopener noreferrer">Linkedin</a>
          <span>&bull;</span>
          <a href="https://github.com/Vinimtt" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>

    </main>
  );
}