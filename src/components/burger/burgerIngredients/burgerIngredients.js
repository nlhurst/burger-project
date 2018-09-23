import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './burgerIngredients.css';

class BurgerIngredients extends Component {
  render () {

    let ingredient = null;

    var burgerIngredients = {
      'bread-bottom': <div className={classes.BreadBottom}></div>,
      'bread-top': (<div className={classes.BreadTop}>
                      <div className={classes.Seeds1}></div>
                      <div className={classes.Seeds2}></div>
                    </div>),
      'meat': <div className={classes.Meat}></div>,
      'cheese': <div className={classes.Cheese}></div>,
      'salad': <div className={classes.Salad}></div>,
      'bacon': <div className={classes.Bacon}></div>
    };

    for (var key in burgerIngredients) {
      if (this.props.type === key) {
        ingredient = burgerIngredients[key];
      }

    };

    return ingredient;

  };

};

BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredients;
