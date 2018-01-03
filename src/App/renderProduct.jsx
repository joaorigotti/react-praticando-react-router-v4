import React from 'react';
import PropTypes from 'prop-types';

const renderProductById = ({ match }) => <h2>Product id: {match.params.id}</h2>;

renderProductById.propTypes = {
  match: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default renderProductById;
