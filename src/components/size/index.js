import React from 'react';
import { Icon } from 'antd-mobile';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './index.less';
import Header from '../../atom_components/header';
import Counter from '../../atom_components/counter';

class Component extends React.Component {
  render() {
    const left = (<Link to="/" onClick={this.handleShow}>
      Back
    </Link>);
    const right = (<button>next</button>);
    return (<div className={styles.normal}>
      <Header left={left} right={right}>
        WaitFree
      </Header>
      <div>
        Size
        <Icon type={require('../../svg/back.svg')} />
        <Link to="/info">Next</Link>

        <hr />
        <Counter label="数量一" type="number" min="0" />
      </div>
    </div>);
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Component);
