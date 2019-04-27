import React, {Component} from 'react'
import {Row, Col} from 'antd'

export default class MobileFooter extends Component {
  render() {
    return (
      <footer className="footer">
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            &copy;&npsp;2019 React
          </Col>
          <Col span={2}></Col>
        </Row>
      </footer>
    )
  }
}
