import React, { Component } from 'react';

import Layout from './components/layout/layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder></BurgerBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;