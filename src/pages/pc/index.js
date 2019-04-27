import React, { Component } from 'react';
import PCHeader from '../../components/pc/pc_header'
import PCFooter from '../../components/pc/pc_footer'
import '../../css/pc.scss'

export default class PCIndex extends Component {
  render() {
    return (
			<div>
				<PCHeader/>
        <PCFooter/>
			</div>  
    );
  }
}