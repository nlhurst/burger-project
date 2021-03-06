import React from 'react';

import Logo from '../../logo/logo';
import NavigationItems from '../navigationItems/navigationItems';
import classes from './sideDrawer.css';
import Backdrop from '../../UI/backdrop/backdrop'
import Aux from '../../../hoc/lhoc';

const sidedrawer = (props) => {

  let attachClasses = [classes.SideDrawer, classes.Close];

  if (props.open) {
    attachClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachClasses.join(' ')}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
      </div>
    </Aux>
  );
}

export default sidedrawer;
