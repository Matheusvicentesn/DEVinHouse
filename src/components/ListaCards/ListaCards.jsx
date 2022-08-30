import PropTypes from 'prop-types';

import { Card } from '@components';

import styles from './ListaCards.module.css';
import { useState } from 'react';

export const ListaCards = ({ produtos }) => {
  const [selecionados, setSelecionados] = useState([]);

  const isSelecionado = (id) => {
    return selecionados.some((item) => item === id);
  };

  const handleSelecionar = (id) => {
    if (isSelecionado(id)) {
      setSelecionados(selecionados.filter((item) => item !== id));
      return;
    }

    setSelecionados([...selecionados, id]);
  };

  return (
    <ul className={styles.lista}>
      {produtos.map((produto) => (
        <li className={styles.listaItem} key={produto.id}>
          <Card
            produto={produto}
            selecionado={isSelecionado(produto.id)}
            onSelecionar={handleSelecionar}
          />
        </li>
      ))}
    </ul>
  );
};

ListaCards.propTypes = {
  produtos: PropTypes.array.isRequired,
};
