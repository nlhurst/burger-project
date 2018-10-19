import React, { Component } from 'react';

import Modal from '../../components/UI/modal/modal';
import Aux from '../lhoc';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component  {
    state = {
      error: null
    }

    componentWillMount () {
      this.reqInt = axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      });
      this.resInt = axios.interceptors.response.use(res => res, error => {
        this.setState({error: error});
      });
    }

    componentWillUnmount () {
      axios.interceptors.request.eject(this.reqInt);
      axios.interceptors.request.eject(this.resInt);
    }

    errorConfirmedHandler () {
      this.setState({error: null})
    }

    render () {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            clicked={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message: null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  }
}

export default withErrorHandler;
