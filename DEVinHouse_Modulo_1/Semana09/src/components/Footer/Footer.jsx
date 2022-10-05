import { Facebook, Instagram, Youtube } from '@icons';

import styles from './Footer.module.css';

export const Footer = () => (
  <footer className={styles.containerFooter}>
    <section className={styles.sectionInfo}>
      <h2 className={styles.sectionInfoTitle}>Green Food</h2>
      <p className={styles.sectionInfoDescription}>©{new Date().getFullYear()} - Green Food.</p>
      <p className={styles.sectionInfoDescription}>Todos os direitos reservados.</p>
    </section>

    <section className={styles.sectionSocialMidia}>
      <Instagram />
      <Facebook />
      <Youtube />
    </section>
  </footer>
);
