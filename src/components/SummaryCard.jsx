import React from 'react'
import PropTypes from 'prop-types'
export const SummaryCard = ({title, count}) => {
  return (
    <div className="summary-container__card">
      <span className="title">{title}</span>
      <span className="value">{count}</span>
    </div>
  );
}

SummaryCard.propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
}
