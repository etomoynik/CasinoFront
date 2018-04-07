import React, { Component } from 'react';
import Tab from 'react-toolbox/lib/tabs/Tab';
import Tabs from 'react-toolbox/lib/tabs/Tabs';
import Button from 'react-toolbox/lib/button/Button';

import TestCard from '../TestCard';


class NavTabs extends Component {
    state = {
      index: 1,
      fixedIndex: 1,
      inverseIndex: 1
    };
  
    handleTabChange = (index) => {
      this.setState({index});
    };
  
    handleFixedTabChange = (index) => {
      this.setState({fixedIndex: index});
    };
  
    handleInverseTabChange = (index) => {
      this.setState({inverseIndex: index});
    };
  
    handleActive = () => {
      console.log('Special one activated');
    };

    
    render () {
      return (
        <section>
          <Tabs index={this.state.index} onChange={this.handleTabChange}>
            <Tab label='Primary'><small>Primary content</small></Tab>
            <Tab label='Secondary' onActive={this.handleActive}><small><Button raised primary label='ici'/></small></Tab>
            <Tab label='Third' disabled><small>Disabled content</small></Tab>
            <Tab label='Fourth'><small><TestCard /></small></Tab>
            <Tab label='Fifth'><small>Fifth content</small></Tab>
          </Tabs>
        </section>
      );
    }
}
    
export default NavTabs;