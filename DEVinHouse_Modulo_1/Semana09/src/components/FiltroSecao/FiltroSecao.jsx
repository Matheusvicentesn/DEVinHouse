import PropTypes from 'prop-types';

import styles from './FiltroSecao.module.css';

export const FiltroSecao = ({ secoes, onSelecionar, secaoSelecionada }) => {
  return (
    <section className={styles.filtro}>
      {secoes.map((secao) => (
        <button
          key={secao}
          className={`${styles.botaoFiltro} 
          ${secaoSelecionada === secao ? styles.botaoFiltroSelecionado : ''}`}
          onClick={() => onSelecionar(secao)}
        >
          {secao}
        </button>
      ))}
    </section>
  );
};

FiltroSecao.propTypes = {
  secoes: PropTypes.arrayOf(PropTypes.string),
  secaoSelecionada: PropTypes.bool,
  onSelecionar: PropTypes.func,
};
