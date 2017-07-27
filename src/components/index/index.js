import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './index.less';
import Header from '../../atom_components/header';

class Component extends React.Component {

  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'customer/list',
      payload: { },
    });
  }

  render() {
    const { customerState } = this.props;
    return (<div className={styles.normal}>
      <Header>
        WaitFree
      </Header>
      <div>
        Welcome
        <Link to="/size">Next</Link>
      </div>
      <div>
        { JSON.stringify(customerState) }
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
