import React from 'react';
import _ from 'lodash';
import { Icon } from 'antd-mobile';

import styles from './index.less';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  componentWillMount = () => {}

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value * 1 || 0,
      });
    }
  }

  onInput = (e) => {
    const value = _.get(e, 'target.value') || '';
    const numberValue = value.replace(/[^\d]*/g, '');
    this.onChange(numberValue);
  }

  onChange = (value) => {
    const formatValue = value * 1 || 0;
    this.setState({
      value: formatValue,
    });
    const { onChange } = this.props;
    if ('function' === typeof onChange) {
      onChange(formatValue);
    }
  }

  decrease = () => {
    let value = 1 * this.state.value || 0;
    // 浮点处理没做。
    value -= this.props.step * 1 || 1;
    if ('min' in this.props) {
      const min = this.props.min * 1 || 0;
      if (min > value) {
        value = min;
      }
    }
    this.onChange(value);
  }

  increase = () => {
    let value = 1 * this.state.value || 0;
    // 浮点处理没做。
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
          <div className={styles.counterOperate} onClick={this.decrease}>
            <Icon type={require('../../svg/decrease.svg')} />
          </div>
          <div className={styles.counterNum}>
            <input
              type="text"
              pattern="[0-9]*"
              value={this.state.value}
              placeholder="Please Inupt"
              onChange={this.onInput}
            />
          </div>
          <div className={styles.counterOperate} onClick={this.increase}>
            <Icon type={require('../../svg/increase.svg')} />
          </div>
        </div>
      </div>
    );
  }
}

export default Component;
