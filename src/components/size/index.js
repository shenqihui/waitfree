import React from 'react';
import { connect } from 'dva';
import styles from './index.less';

class Component extends React.Component {
  render() {
    return (<div className={styles.normal}>
      <div>
        Size
      </div>
    </div>);
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Component);
