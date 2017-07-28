import React from 'react';
import { Icon } from 'antd-mobile';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './index.less';
import Header from '../../atom_components/header';
import Counter from '../../atom_components/counter';
import NumberKeyboard from '../../atom_components/number_keyboard';
import PhoneKeyboard from '../../atom_components/phone_keyboard';

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
      <div style={{ width: 400, margin: '0 auto' }}>
        <PhoneKeyboard />
      </div>
      <br />
      <br />
      <br />
      <div style={{ width: 400, margin: '0 auto' }}>
        <NumberKeyboard />
      </div>
      <br />
      <br />
      <br />
      <div data-bak-style={{ display: 'none' }}>
        <Counter label="数量一" type="number" min="0" />
        <br />
        <br />
        <br />
        <Counter label="数量一" type="number" min="0" />
        <br />
        <br />
        <br />
        <Counter label="数量二" type="number" min="0" />
        <br />
        <br />
        <br />
        <Counter label="数量三" type="number" min="0" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
