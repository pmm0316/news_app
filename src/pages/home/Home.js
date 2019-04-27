import React, { Component } from 'react';
import ComponentHeader from '../../components/header/Header'
import ComponentFooter from '../../components/footer/Footer'
import BodyIndex from '../../components/body-index/BodyIndex'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <ComponentHeader/>
        {this.props.children}
        <BodyIndex age={26}/>
        <ComponentFooter/>
      </div>
    );
  }
}

export default Home;
