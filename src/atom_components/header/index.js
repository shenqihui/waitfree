import React from 'react';
import { connect } from 'dva';
import styles from './index.less';

class Component extends React.Component {

  render() {
    const { children, left, right } = this.props;
    return (<div className={styles.normal}>
      <div className={styles.headerLeft}>
        { left || null }
      </div>
      <div className={styles.headerRight}>
        { right || null }
      </div>
      <div className={styles.headerContent}>
        { children || null }
      </div>
    </div>);
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Component);
