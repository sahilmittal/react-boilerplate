/**
 *  Component: App
 */

import React from 'react';
import { Route } from 'react-router-dom';
import Page from '../page';

const App = () => {
  return(
    <div>
      <main>
        <Route exact path="/" component={ Page } />
      </main>
    </div>
  )
}

export default App;