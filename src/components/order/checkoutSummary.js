import React from 'react';

import Burger from '../burger/burger';
import Button from '../UI/button/button';
import classes from './checkoutSummary.css';

const checkoutSummary = (props) => {
  return (
    <div className={classes.Summary}>
      <h1>Enjoy!</h1>
        <div style={{width: '100%', margin: 'auto'}}>
          <Burger ingredients={props.ingredients}/>
        </div>
      <Button
        btnType='Success'
        clicked={props.checkoutContinue}>Continue</Button>
      <Button
        btnType='Danger'
        clicked={props.checkoutCancelled}>Cancel</Button>
    </div>
  );
}

export default checkoutSummary;
