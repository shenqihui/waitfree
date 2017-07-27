import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './index.less';
import Header from '../../atom_components/header';

class Component extends React.Component {
  render() {
    const left = (<button><Link to="/" onClick={this.handleShow}>Back</Link></button>);
    const right = (<button>next</button>);
    return (<div className={styles.normal}>
      <Header left={left} right={right}>
        WaitFree
      </Header>
      <div>
        Size
        <Link to="/info">Next</Link>
      </div>
    </div>);
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Component);
