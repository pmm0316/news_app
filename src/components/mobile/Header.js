import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
			<header className="mobile-header">
        <a href="/">
          <span className="iconfont icon-news"></span>
          <span>ReactNews</span>
        </a>
			</header>  
    );
  }
}