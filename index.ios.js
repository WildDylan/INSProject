import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import GuidePage from './GuidePage';
import RootPage from './RootPage';

class Project extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene  key="GuidePage" component={GuidePage} hideNavBar title="GuidePage" initial={this.props.launched} />
          <Scene key="RootPage" component={RootPage} title="RootPage" hideNavBar initial={this.props.launched}/>
        </Scene>
      </Router>
    );
  };
};

AppRegistry.registerComponent('Project', () => Project);