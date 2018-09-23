import React from 'react';

import classes from './toolbar.css';
import Logo from '../../logo/logo';
import NavigationItems from '../navigationItems/navigationItems';

const toolbar = ( props ) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo />
      <nav>
        <NavigationItems />
      </nav>
  </header>
);

export default toolbar;
