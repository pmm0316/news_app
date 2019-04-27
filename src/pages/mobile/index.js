import React, { Component } from 'react';
import Header from '../../components/mobile/Header'
import MobileFooter from '../../components/mobile/mobile_footer'
import '../../css/mobile.scss'

export default class MobileIndex extends Component {
  render() {
    return (
      <div>
        <Header/>
        <MobileFooter/>
      </div>  
    );
  }
}