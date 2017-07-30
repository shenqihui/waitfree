import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './index.less';
import Header from '../../atom_components/header';
import * as Service from '../../services/customer';

class Component extends React.Component {

  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'customer/list',
      payload: { },
    });
  }

  onDelete = (id) => {
    // eslint-disable-next-line
    if (!window.confirm('Are you sure to delete this customer')) {
      return;
    }
    const { dispatch } = this.props;
    Service.remove(id)
    .then((res) => {
      window.console.log(res);
      dispatch({
        type: 'customer/list',
        payload: { },
      });
    })
    .catch((rej) => {
      window.console.log(rej);
    });
  }

  render() {
    const { customerState } = this.props;
    window.console.log('customerState', customerState);
    return (<div className={styles.normal}>
      <Header>
        <img className={styles.logo} src={require('../../assets/logo.png')} role="presentation" />
        <span>WaitFree</span>
      </Header>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.welcome}>
            <h3 className={styles.welcomeTitle}>Welcome</h3>
            <p>
              Welcome to Looking For Chai! Please take a ticket by clicking the START below. We will try to serve you as soon as possible. THANK YOU!
            </p>
            <div className={`${styles.start} button`}>
              <Link to="/size">Start</Link>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.troopsHeader}>
            <table>
              <thead>
                <tr>
                  <td>Position</td>
                  <td>IDs</td>
                  <td>Group Size</td>
                </tr>
              </thead>
            </table>
          </div>
          <div className={styles.troops}>
            <table>
              <tbody>
                {
                  customerState.list.map((elem, index) => {
                    return (<tr key={index} onClick={this.onDelete.bind(this, elem.id)}>
                      <td>{ index + 1}</td>
                      <td>
                        { elem.name ? elem.name : `#${elem.id}` }
                      </td>
                      <td>{ elem.size }</td>
                    </tr>);
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    customerState: state.customer,
  };
}

export default connect(mapStateToProps)(Component);
