import React from 'react';
import _ from 'lodash';
import { Icon } from 'antd-mobile';

import styles from './index.less';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
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
    const value = `${this.state.value || ''}`.replace(/[^\d]*/g, '');
    const newValue = value.substring(0, value.length - 1);
    this.onChange(newValue);
  }

  onInput = (inputValue) => {
    const value = this.state.value;
    const newValue = `${value}${inputValue}`;
    const numberValue = newValue.replace(/[^\d]*/g, '').substring(0, 11);
    this.onChange(numberValue);
  }

  onChange = (value) => {
    const formatValue = this.formatPhone(value || '');
    this.setState({
      value: formatValue,
    });
    const { onChange } = this.props;
    if ('function' === typeof onChange) {
      onChange(formatValue);
    }
  }

  formatPhone = (value) => {
    const valueString = `${value}`;
    const part1 = valueString.match(/^(\d{1,3})/);
    const part2 = valueString.match(/^\d{3}(\d{1,4})/);
    const part3 = valueString.match(/^\d{7}(\d{1,4})/);
    let formatValue = '';
    if (part1) {
      formatValue = part1[1];
      if (part2) {
        formatValue = `${formatValue}-${part2[1]}`;
        if (part3) {
          formatValue = `${formatValue}-${part3[1]}`;
        }
      }
    }
    return formatValue;
  }

  render() {
    const { className } = this.props;

    return (
      <div className={`${styles.normal} ${className || ''}`}>
        <div className={styles.inputResult}>
          <div className={styles.inputPhoneIcon}>
            <Icon type={require('../../svg/phone.svg')} />
          </div>
          <div className={styles.inputPhoneShow}>
            <div className={styles.inputPhoneShowShadow}>000-0000-0000</div>
            <div className={styles.inputPhoneShowActural}>{this.state.value}</div>
          </div>
        </div>
        <div className={styles.separateLine} />
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
                          return (<td className={`${styles.keyboardCol} ${styles.keyboardDelete}`} onClick={this.onDelete} key={`row_${row}_col_${col}`}>
                            <div className={styles.keyboardColCircle}>
                              <Icon className={styles.keyboardDeleteIcon} type={require('../../svg/delete.svg')} />
                            </div>
                          </td>);
                        }
                        else if (3 === row && 1 === col) {
                          return (<td className={styles.keyboardCol} key={`row_${row}_col_${col}`} onClick={this.onInput.bind(this, 0)}>
                            <div className={styles.keyboardColCircle}>0</div>
                          </td>);
                        }
                        else if (3 === row && 0 === col) {
                          return (<td className={styles.keyboardCol} key={`row_${row}_col_${col}`}>
                            <div className={styles.keyboardColCircle} />
                          </td>);
                        }
                        else {
                          return (<td className={styles.keyboardCol} key={`row_${row}_col_${col}`} onClick={this.onInput.bind(this, value)}>
                            <div className={styles.keyboardColCircle}>{ value }</div>
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
