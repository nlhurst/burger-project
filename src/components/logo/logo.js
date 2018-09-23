import React from 'react';

import burgerLogo from '../../assets/images/burger-logo-2.png'
import classes from './logo.css'

const logo = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
    <img src={burgerLogo} alt='BurgerLogo'/>
  </div>
);

export default logo;
