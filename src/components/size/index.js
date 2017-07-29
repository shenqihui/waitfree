import React from 'react';
import { Icon } from 'antd-mobile';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './index.less';
import Header from '../../atom_components/header';
import Counter from '../../atom_components/counter';
import NumberKeyboard from '../../atom_components/number_keyboard';

class Component extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line
    window.____size = this;
    this.state = {
      value: 0,
      size: 0,
      sizeInfo: {
        stroller: 0,
        highChair: 0,
        wheelChair: 0,
        carSeat: 0,
      },
    };
  }

  render() {
    const checkSize = () => {
      // eslint-disable-next-line
      return window.alert('Please input party size.');
    };
    const { size, sizeInfo } = this.state;
    const left = (<Link className="button" to="/">
      <Icon type={require('../../svg/back.svg')} />
    </Link>);
    let right = (<Link className="button ghost" to={`/info?size=${size}&sizeInfo=${JSON.stringify(sizeInfo)}`}>
      Next
    </Link>);
    if (!size * 1) {
      right = (<div className="button ghost" onClick={checkSize}>
        Next
      </div>);
    }
    return (<div className={styles.normal}>
      <Header left={left} right={right}>
        Party Size
      </Header>

      <div className={styles.numberInputContainer}>
        <NumberKeyboard
          value={size}
          onChange={(value) => {
            return this.setState({
              size: value,
            });
          }}
        />
        <div className={styles.counterInputContainer}>
          <Counter
            value={sizeInfo.stroller}
            label="Stroller(s)"
            type="number"
            min="0"
            onChange={(value) => {
              const newSizeInfo = Object.assign({
                ...this.state.sizeInfo,
              }, {
                stroller: value,
              });
              return this.setState({
                sizeInfo: newSizeInfo,
              });
            }}
          />
          <Counter
            value={sizeInfo.highChair}
            label="High Chair(s)"
            type="number"
            min="0"
            onChange={(value) => {
              const newSizeInfo = Object.assign({
                ...this.state.sizeInfo,
              }, {
                highChair: value,
              });
              return this.setState({
                sizeInfo: newSizeInfo,
              });
            }}
          />
          <Counter
            value={sizeInfo.wheelChair}
            label="Wheel Chair(s)"
            type="number"
            min="0"
            onChange={(value) => {
              const newSizeInfo = Object.assign({
                ...this.state.sizeInfo,
              }, {
                wheelChair: value,
              });
              return this.setState({
                sizeInfo: newSizeInfo,
              });
            }}
          />
          <Counter
            value={sizeInfo.carSeat}
            label="Car Seat(s)"
            type="number"
            min="0"
            onChange={(value) => {
              const newSizeInfo = Object.assign({
                ...this.state.sizeInfo,
              }, {
                carSeat: value,
              });
              return this.setState({
                sizeInfo: newSizeInfo,
              });
            }}
          />
        </div>
      </div>
    </div>);
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Component);
