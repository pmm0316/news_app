import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Input} from 'antd'

// 定义默认参数值
const defaultProps = {
  age: 18,
  username: 'Tom'
}

export default  class BodyChild extends Component {
  componentWillUnmount(){
    clearTimeout(this.pwdErrorTimer);
    clearTimeout(this.userNameErrorTimer);
  }
  render () {
    return (
      <div>
        <p>子组件输入</p>
        <Input/>
        <input type="text" onChange={this.props.handleChildValueChange}/>
        <p>age: {this.props.age}, username: {this.props.username}</p>
      </div>
    )
  }
}
BodyChild.propTypes = {
  age: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired
}

BodyChild.defaultProps = defaultProps