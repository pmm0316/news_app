import React, { Component } from 'react';
import {Col, Row} from 'antd'

class PCHeader extends Component {
  render() {
    return (
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a href="/" className="logo">
              <span className="iconfont icon-news"></span>
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    );
  }
}

export default PCHeader;