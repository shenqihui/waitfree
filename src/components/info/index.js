import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './index.less';
import Header from '../../atom_components/header';
import Finish from '../../atom_components/finish';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handleClose = () => {
    this.setState({
      visible: false,
    });
  }

  handleShow = () => {
    this.setState({
      visible: true,
    });
  }

  render() {
    const left = (<Link to="/size">Back</Link>);
    const right = (<Link to="/">Done</Link>);
    return (<div className={styles.normal}>
      <Header left={left} right={right}>
        WaitFree
      </Header>
      <div>
        Info
        <button onClick={this.handleShow}>Submit</button>
      </div>

      <Finish visible={this.state.visible} handleClose={this.handleClose} />
    </div>);
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Component);
