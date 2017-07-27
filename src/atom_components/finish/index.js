import React from 'react';
import { connect } from 'dva';
import styles from './index.less';

class Component extends React.Component {
  handleClose = () => {
    const { handleClose } = this.props;
    if ('function' === typeof handleClose) {
      handleClose();
    }
  }

  render() {
    if (!this.props.visible) {
      return null;
    }

    return (<div className={styles.normal}>
      <div className={styles.shade} onClick={this.handleClose}>遮罩层</div>
      <div>
        Finish
        <button onClick={this.handleClose}>Done</button>
      </div>
    </div>);
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Component);
