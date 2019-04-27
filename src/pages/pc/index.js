import React, { Component } from 'react';
import Header from '../../components/pc/Header'
import PCFooter from '../../components/pc/pc_footer'
import '../../css/pc.scss'

export default class PCIndex extends Component {
  render() {
    return (
			<div>
				<Header/>
        <PCFooter/>
			</div>  
    );
  }
}