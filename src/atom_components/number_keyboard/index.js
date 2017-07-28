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
                  return (<tr className={styles.keyboardRow} key={`row_${row}`}>
                    {
                      _.range(0, 3).map((col) => {
                        const value = ((row * 3) + col + 1) % 10;
                        if (3 === row && 2 === col) {
                          return null;
                        }
                        else if (3 === row && 1 === col) {
                          return (<td className={`${styles.keyboardCol} ${styles.keyboardDelete}`} onClick={this.onDelete} key={`row_${row}_col_${col}`} colSpan={2}>
                            DELETE
                          </td>);
                        }
                        else {
                          return (<td className={styles.keyboardCol} key={`row_${row}_col_${col}`} onClick={this.onInput.bind(this, value)}>
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
