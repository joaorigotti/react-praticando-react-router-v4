import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';

import renderProductById from './renderProduct';

const Products = ({ match }) => (
  <div>
    <h1>Products</h1>
    <ul>
      <li><Link to="/products/1">Product 1</Link></li>
      <li><Link to="/products/2">Product 2</Link></li>
      <li><Link to="/products/3">Product 3</Link></li>
      <li><Link to="/products/4">Product 4</Link></li>
    </ul>

    <Route path={`${match.path}/:id`} render={renderProductById} />
  </div>
);

Products.propTypes = {
  match: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default Products;
