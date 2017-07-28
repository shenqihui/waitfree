import React from 'react';
import _ from 'lodash';

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

  onDelete = () => {
    const value = this.state.value;
    const newValue = parseInt(value / 10, 10);
    this.onChange(newValue);
  }

  onInput = (inputValue) => {
    const value = this.state.value;
    const newValue = `${value}${inputValue}`;
    const numberValue = newValue.replace(/[^\d]*/g, '');
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
    const { className } = this.props;

    return (
      <div className={`${styles.normal} ${className || ''}`}>
        <div className={styles.inputResult}>
          {this.state.value}
        </div>
        <div className={styles.keyboard}>
          <table className={styles.table}>
            <tbody>
              {
                _.range(0, 4).map((row) => {
                  return (<tr key={`row_${row}`}>
                    {
                      _.range(0, 3).map((col) => {
                        const value = ((row * 3) + col + 1) % 10;
                        if (3 === row && 2 === col) {
                          return null;
                        }
                        else if (3 === row && 1 === col) {
                          return (<td onClick={this.onDelete} key={`row_${row}_col_${col}`} colSpan={2}>
                            DELETE
                          </td>);
                        }
                        else {
                          return (<td key={`row_${row}_col_${col}`} onClick={this.onInput.bind(this, value)}>
                            { value }
                          </td>);
                        }
                      })
                    }
                  </tr>);
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Component;
