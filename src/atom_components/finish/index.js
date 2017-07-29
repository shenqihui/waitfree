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
    const { size = 0, id = 0, length = 0, url = 'w8fr.com/t/6c3abe' } = this.props;

    return (<div className={styles.normal}>
      <div className={styles.shade} onClick={this.handleClose} />
      <div className={styles.desc}>
        <div>Welcome to Facing East! Your Party of {size}<span className="text-main">(Assigned No.#{id})</span> is #{length} in the line. Go to {url} to check line status or update your info.
        </div>
        <div className={`${styles.buttonLine}`}>
          <div className="button full" onClick={this.handleClose}>Done</div>
        </div>
      </div>
    </div>);
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Component);
