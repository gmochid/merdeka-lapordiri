'use strict';

import React from 'react-native';
import Home from './src/Home';
import Login from './src/Login';

var {
  AppRegistry,
  Navigator
} = React;

class LaporDiri extends React.Component {
  render() {
    return (
      <Navigator
        initialRoute={{name: 'My First Scene', index: 0}}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        renderScene={(route, navigator) => {
          if (route.index == 0) {
            return <Home navigator={navigator} route={route}/>;
          } else {
            return <Login navigator={navigator} route={route}/>;
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('LaporDiri', () => LaporDiri);
