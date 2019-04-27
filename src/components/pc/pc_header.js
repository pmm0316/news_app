import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Col, Row, Menu, Icon, Form ,Button} from 'antd'

class PCHeader extends Component {
  constructor () {
    super()
    this.state = {
      current: 'top',
      userNickName: '',
      hasLogin: false
    }
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    const { getFiledProps } = this.props.form
    const userShow = this.state.hasLogin
      ?
      <Menu.Item key="login">
        <Button className="username" htmlType="button">{this.state.userNickName}</Button>
        <Link target="_blank" to="">
          <Button type="dash">个人中心</Button>
        </Link>
        <Button>退出</Button>
      </Menu.Item>
      :
      <Menu.Item key="logout">
        <Icon type="appstore" />注册/登录
      </Menu.Item>
    return (
      <header className="header">
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a href="/" className="logo">
              <span className="iconfont icon-news"></span>
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="top">
                <Icon type="appstore" />头条
              </Menu.Item>
              <Menu.Item key="shehui">
                <Icon type="appstore" />社会
              </Menu.Item>
              <Menu.Item key="guonei">
                <Icon type="appstore" />国内
              </Menu.Item>
              <Menu.Item key="guoji">
                <Icon type="appstore" />国际
              </Menu.Item>
              <Menu.Item key="tiyu">
                <Icon type="appstore" />体育
              </Menu.Item>
              {userShow}
            </Menu>
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    );
  }
}

export default PCHeader = Form.create({})(PCHeader);