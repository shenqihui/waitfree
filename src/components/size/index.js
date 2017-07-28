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
      <Icon type={require('../../svg/back.svg')} />
    </Link>);
    const right = (<button>next</button>);
    return (<div className={styles.normal}>
      <Header left={left} right={right}>
        WaitFree
      </Header>
      <br />
      <br />
      <div>
        <Counter label="数量一" type="number" min="0" />
        <Counter label="数量一" type="number" min="0" />
        <Counter label="数量二" type="number" min="0" />
        <Counter label="数量三" type="number" min="0" />
      </div>
      <br />
      <br />
    </div>);
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Component);
