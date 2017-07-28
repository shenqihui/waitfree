// 浮点处理没做。

import React from 'react';
import { Icon, InputItem } from 'antd-mobile';

import styles from './index.less';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  componentWillMount = () => {}

  onChange = (value) => {
    const { onChange } = this.props;
    if ('function' === typeof onChange) {
      onChange(value);
    }
  }

  decrease = () => {
    let value = 1 * this.state.value || 0;
    value -= this.props.step * 1 || 1;
    if ('min' in this.props) {
      const min = this.props.min * 1 || 0;
      if (min > value) {
        value = min;
      }
    }
    this.setState({
      value,
    });
    this.onChange(value);
  }

  increase = () => {
    let value = 1 * this.state.value || 0;
    value += this.props.step * 1 || 1;
    if ('max' in this.props) {
      const max = this.props.max * 1 || 0;
      if (max < value) {
        value = max;
      }
    }
    this.setState({
      value,
    });
    this.onChange(value);
  }

  render() {
    const { label, className } = this.props;
    let labelElem = label;
    if ('function' === typeof label) {
      labelElem = label();
    }

    return (
      <div className={`${styles.normal} ${className || ''}`}>
        <div className={styles.label}>
          { labelElem }
        </div>
        <div className={styles.counter}>
          <div className={styles.counterOperate}>
            <span onClick={this.decrease}>
              <Icon type={require('../../svg/decrease.svg')} />
            </span>
          </div>
          <div className={styles.counterNum}>
            <InputItem
              value={this.state.value}
              type={this.props.type || 'money'}
              placeholder="money format"
            />
          </div>
          <div className={styles.counterOperate}>
            <span onClick={this.increase}>
              <Icon type={require('../../svg/increase.svg')} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Component;
