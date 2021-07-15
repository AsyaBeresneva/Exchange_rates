import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import './App.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { TabPanel1 } from './Tab1';
import { TabPanel2 } from './Tab2';
import { TabPanel3 } from './Tab3';

class App extends Component {
  constructor() {
    super();
    this.state = { tabIndex: 0 };
  }
  render() {
    return (
        <div id="container">
            <header className='App-header'>
                <h1 className='H1'>Курс российского рубля к иностранной валюте</h1>
            </header>
            <div className='leftimage'></div>
            <div className='rightimage'></div>
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
              <TabList>
                <Tab>Динамика</Tab>
                <Tab>Текущий курс</Tab>
                <Tab>Прогноз</Tab>
              </TabList>
              <TabPanel><TabPanel1 /></TabPanel>
              <TabPanel><TabPanel2 /></TabPanel>
              <TabPanel><TabPanel3 /></TabPanel>
            </Tabs>
        </div>
   );
  }
}


// const data = require('./data/All_rate');

// console.log(data);
// const tabledata = [data].map((item, index) => {
//     console.log(tabledata);
// });

export default App;
