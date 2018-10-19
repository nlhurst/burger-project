import React, { Component } from 'react';

import Button from '../../../components/UI/button/button';
import classes from './contactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/spinner/spinner';
import Input from '../../../components/UI/input/input';

class contactData extends Component {
  state = {
    name:'',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();

      this.setState({loading: true});

      const order = {
        ingredients: this.props.ingredients,
        price: this.props.price,
        customer: {
          name: 'Donald Duck',
          address: {
            street: 'Duck Tales St.',
            zip: '02542',
            country: 'United States'
          },
          email: 'test@test.com',
          deliveryMethod: 'fastest'
        }
      }

    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false, purchasing: false});
        this.props.history.push('/');
      } )
      .catch(error => {
        this.setState({loading: false, purchasing: false});
      } );
  }


  render () {
    let form = (
      <form>
        <Input inputtype='input' type='text' name='name' placeholder='Name' />
        <Input inputtype='input' type='text' name='email' placeholder='Email' />
        <Input inputtype='input' type='text' name='street' placeholder='Street' />
        <Input inputtype='input' type='text' name='Zip' placeholder='Zip' />
        <Button btnType='Success' clicked={this.orderHandler}>Place Order</Button>
      </form>);
    if (this.state.loading) {
      form = <Spinner/>;
    }

    return (
      <div className={classes.ContactData}>
        <h1>Enter your contact information: </h1>
        {form}
      </div>
    );
  }
}

export default contactData;
