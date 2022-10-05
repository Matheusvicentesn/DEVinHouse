import PropTypes from 'prop-types';

import { ListaCards } from '@components';

import styles from './SubSecao.module.css';

export const SubSecao = ({ produtos, subSecao }) => {
  const produtosFiltrados = produtos.filter((prod) => prod.subSecao === subSecao);

  return (
    <div className={styles.subSecao}>
      <div>
        <h3>{subSecao}</h3>
        <hr className={styles.separador} />
      </div>

      <ListaCards produtos={produtosFiltrados} />
    </div>
  );
};

SubSecao.propTypes = {
  produtos: PropTypes.array.isRequired,
  subSecao: PropTypes.string,
};
