import React from 'react';
import { connect } from 'dva';
import styles from './index.less';

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
      <div>
        Welcome
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
