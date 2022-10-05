import React from "react";
import PropTypes from "prop-types";

const CardList = ({ children }) => {
  return <div className="cardList">{children}</div>;
};

export default CardList;

CardList.propTypes = {
  children: PropTypes.node,
};
