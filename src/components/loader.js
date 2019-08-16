/**
 *  Component: 'loader'
 *  used by other components to display loader
 */

import React from 'react';
import '../styles/loader.scss';

const Loader = () => (
  <img className="loader" src="images/loader.gif" alt="Loading.." />
)

export default Loader;