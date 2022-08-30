import { logo } from '@images';

import styles from './Header.module.css';
export const Header = () => (
  <header className={styles.header}>
    <div className={styles.titleContainer}>
      <img src={logo} alt='Logo do restaurante' height={50} />
      <h1 className={styles.title}>Green Food</h1>
    </div>

    <nav>
      <ul className={styles.ul}>
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={styles.link} href='#'>
            Menu
          </a>
        </li>
      </ul>
    </nav>
  </header>
);
